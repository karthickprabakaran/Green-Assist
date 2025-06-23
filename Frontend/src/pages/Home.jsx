import React, { useState } from "react";
import ListDeals from "./ListDeals";
import CreateDeal from "./CreateDeal";
import ViewDeals from "./ViewDeals";

const Home = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-start py-12 px-4 relative overflow-hidden">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 mt-8 relative">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold transition-all duration-200 focus:outline-none text-lg ${activeTab === "list"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-white/10 text-blue-200 hover:bg-white/20"
              }`}
            onClick={() => setActiveTab("list")}
          >
            List Deals
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold transition-all duration-200 focus:outline-none text-lg ml-2 ${activeTab === "create"
                ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
                : "bg-white/10 text-blue-200 hover:bg-white/20"
              }`}
            onClick={() => setActiveTab("create")}
          >
            Create Deal
          </button>
        </div>
        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "list" ? <ViewDeals /> : <CreateDeal />}
        </div>
      </div>
    </div>
  );
};

export default Home; 
