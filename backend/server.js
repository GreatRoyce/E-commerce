// backend/server.js

// Import required modules
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");             // For hashing (reserved for future use)
const admin = require("firebase-admin");      // Firebase admin SDK (reserved for future use)

const app = express();
const PORT = 3000;

// Set static folder path
const staticPath = path.join(__dirname, "../public");

// Middleware
app.use(express.json());                     // Parse JSON request bodie s
app.use(express.static(staticPath));          // Serve static files (CSS, JS, images, etc.)

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));  // Serve homepage
});

app.get("/product", (req, res) => {
  res.sendFile(path.join(staticPath, "product.html"));  // Serve product page
});

//signup route
app.get("/signup", (req, res)=>{
  res.sendFile(path.join(staticPath, "signup.html"))
})

// 404 handler – catch all unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(staticPath, "404.html"));  // Serve 404 page
});

app.use((req, res)=>{
  res.redirect('/404')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
