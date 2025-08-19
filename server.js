import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


const USER = {
  email: "priya@gmail.com",
  password: "123456"
};

// API Route for Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  // Check credentials
  if (email === USER.email && password === USER.password) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("✅ Netflix Backend is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});