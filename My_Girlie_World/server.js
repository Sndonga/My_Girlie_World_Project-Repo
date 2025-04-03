const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password234",
  database: "my_girlie_world"
});
// 👇 Right after connecting, but BEFORE starting the server
db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL!");
  });
// API Endpoint to Fetch Products
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// API Endpoint to Save Orders
app.post("/api/orders", (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  db.query(
    "INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)",
    [user_id, product_id, quantity],
    (err, results) => {
      if (err) throw err;
      res.json({ success: true });
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));
// server.js (Backend)
app.post('/api/pay', (req, res) => {
  res.json({ 
    success: true, 
    message: "M-Pesa request sent to 0712XXX! Confirm payment." 
  });
});