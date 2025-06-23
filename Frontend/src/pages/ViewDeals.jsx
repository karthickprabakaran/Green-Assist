import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewDeals = () => {
  const [deals, setDeals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/deals/view");
        setDeals(res.data);
      } catch (err) {
        setError("Failed to load deals");
      }
    };

    fetchDeals();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Deals</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {deals.length === 0 ? (
        <p>No deals found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Buyer</th>
              <th style={thStyle}>Seller</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal._id} style={trStyle}>
                <td style={tdStyle}>{deal.title}</td>
                <td style={tdStyle}>{deal.description}</td>
                <td style={tdStyle}>₹{deal.price}</td>
                <td style={tdStyle}>{deal.buyerName || "N/A"}</td>
                <td style={tdStyle}>{deal.sellerName || "N/A"}</td>
                <td style={tdStyle}>{deal.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  borderBottom: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
  background: "#f4f4f4",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "8px",
};

const trStyle = {
  backgroundColor: "#fff",
};

export default ViewDeals;
