import React, { useEffect, useState } from "react";
import axios from "axios";

const DealList = () => {
  const [deals, setDeals] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/deals", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDeals(res.data))
      .catch((err) => console.log(err));
  }, []);

  const updateStatus = async (id, action) => {
    try {
      await axios.patch(`http://localhost:5001/api/deals/${id}/${action}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Deal Updated");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Your Deals</h2>
      {deals.map((deal) => (
        <div key={deal._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{deal.title}</h3>
          <p>{deal.description}</p>
          <p>Price: ${deal.price}</p>
          <p>Status: {deal.status}</p>
          <p>Counter Offer: {deal.counterOffer || "N/A"}</p>
          {deal.status === "pending" && (
            <>
              <button onClick={() => updateStatus(deal._id, "accept")}>Accept</button>
              <button onClick={() => updateStatus(deal._id, "reject")}>Reject</button>
              <button
                onClick={() => {
                  const newPrice = prompt("Enter Counter Offer:");
                  axios.patch(`http://localhost:5001/api/deals/${deal._id}/counter`, { counterPrice: newPrice }, {
                    headers: { Authorization: `Bearer ${token}` },
                  }).then(() => window.location.reload());
                }}
              >
                Counter Offer
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DealList;

