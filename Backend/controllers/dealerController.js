import Deal from "../models/Deal.js";

// Buyer creates a deal
export const createDeal = async (req, res) => {
  try {
    const { title, description, price, buyerName, sellerName } = req.body;

    const deal = await Deal.create({
      title,
      description,
      price,
      buyerName,
      sellerName,
    });

    res.status(201).json(deal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Seller accepts the deal
export const acceptDeal = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ message: "Deal not found" });

    deal.status = "in_progress";
    await deal.save();
    res.json(deal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Seller rejects the deal
export const rejectDeal = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ message: "Deal not found" });

    deal.status = "cancelled";
    await deal.save();
    res.json(deal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Seller counters the offer
export const counterOffer = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ message: "Deal not found" });

    const { counterPrice } = req.body;
    deal.counterOffer = counterPrice;
    deal.status = "pending"; // still pending negotiation
    await deal.save();
    res.json(deal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all deals by username (either buyer or seller)
export const getUserDeals = async (req, res) => {
  try {
    const { username } = req.query;

    const deals = await Deal.find({
      $or: [{ buyerName: username }, { sellerName: username }],
    });

    res.json(deals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// View all deals (public route)
export const viewDeals = async (req, res) => {
  try {
    const deals = await Deal.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch deals" });
  }
};
