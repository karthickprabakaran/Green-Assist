import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateDeal = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    sellerName: "",
    buyerName: ""
  });

  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://green-assist-jb0c.onrender.com/api/auth/sellers")
      .then((res) => setSellers(res.data))
      .catch((err) => console.error("Failed to load sellers", err));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://green-assist-jb0c.onrender.com/api/deals", form);
      alert("Deal Created Successfully");
      setForm({
        title: "",
        description: "",
        price: "",
        sellerName: "",
        buyerName: ""
      });
    } catch (err) {
      setError(err.response?.data?.message || "Deal creation failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Create a Deal</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="buyerName"
            value={form.buyerName}
            onChange={handleChange}
            placeholder="Your Name (Buyer)"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Deal Title"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Proposed Price"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <select
            name="sellerName"
            value={form.sellerName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-white"
          >
            <option value="">Select Seller</option>
            {sellers.map((s) => (
              <option key={s._id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition"
          >
            Create Deal
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDeal;
