import bcrypt from "bcrypt";
import User from "../models/userModel.js";



export const registerUser = async (req, res) => {
  console.log("Registering user:", req.body);
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role });
  res.status(201);
};

export const loginUser = async (req, res) => {
  console.log("Logging in user:", req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.status(200);
  console.log("User logged in successfully:", user);
};




export const getSellers = async (req, res) => {
  try {
    const sellers = await User.find({ role: "seller" }).select("-password");
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sellers" });
  }
};


