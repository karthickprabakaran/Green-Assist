import React, { useEffect, useState } from "react";

const ViewDeals = () => {
  const [deals, setDeals] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://green-assist-jb0c.onrender.com/api/deals/view");
        const data = await res.json();
        setDeals(data);
      } catch (err) {
        setError("Failed to load deals");
      } finally {
        setLoading(false);
      }
    };
    fetchDeals();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              All Deals
            </h1>
          </div>
          <p className="text-slate-600 ml-5">Manage and track all your business deals</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Content */}
        {deals.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No deals found</h3>
            <p className="text-slate-500">Your deals will appear here once they're created.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Stats Bar */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{deals.length}</div>
                    <div className="text-xs font-medium text-slate-500">Total Deals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {deals.filter(deal => deal.status === 'completed').length}
                    </div>
                    <div className="text-xs font-medium text-slate-500">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {deals.filter(deal => deal.status === 'in_progress').length}
                    </div>
                    <div className="text-xs font-medium text-slate-500">In Progress</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-5[48;55;156;935;1248t0 border-b border-slate-200">
                    <th className="text-left px-6 py-4 text-sm font-bold text-slate-700 tracking-wide">
                      DEAL DETAILS
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-slate-700 tracking-wide">
                      PRICE
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-slate-700 tracking-wide">
                      PARTICIPANTS
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-slate-700 tracking-wide">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {deals.map((deal, index) => (
                    <tr
                      key={deal._id}
                      className="group hover:bg-slate-50 transition-all duration-200"
                    >
                      {/* Deal Details */}
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {deal.title}
                          </div>
                          <div className="text-sm text-slate-500 line-clamp-2 max-w-md">
                            {deal.description}
                          </div>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-5">
                        <div className="font-bold text-lg text-slate-900">
                          {formatPrice(deal.price)}
                        </div>
                      </td>

                      {/* Participants */}
                      <td className="px-6 py-5">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">
                              Buyer: {deal.buyerName || "N/A"}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">
                              Seller: {deal.sellerName || "N/A"}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusColors[deal.status] || "bg-slate-100 text-slate-700"}`}>
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${statusDots[deal.status] || "bg-slate-400"}`}></div>
                          {deal.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const statusColors = {
  pending: "bg-amber-50 border border-amber-200 text-amber-800",
  in_progress: "bg-blue-50 border border-blue-200 text-blue-800",
  completed: "bg-emerald-50 border border-emerald-200 text-emerald-800",
  cancelled: "bg-red-50 border border-red-200 text-red-800",
};

const statusDots = {
  pending: "bg-amber-500",
  in_progress: "bg-blue-500",
  completed: "bg-emerald-500",
  cancelled: "bg-red-500",
};

export default ViewDeals;
