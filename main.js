// Fetch Products from MySQL
fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    console.log("Products:", products);
    // Render products on the page
  });
 // main.js (Frontend)
document.getElementById('pay-button').addEventListener('click', async () => {
  const response = await fetch('/api/pay', { method: 'POST' });
  const result = await response.json();
  alert(result.message); // Shows "M-Pesa request sent..."
});
// js/avatar.js
document.getElementById('site-avatar').addEventListener('click', () => {
  const messages = [
    "Pro Tip: Free delivery on orders over KES 3000! 🚚",
    "New pastel bows just restocked! 🎀",
    "Need help? Email us at hello@mygirlieworld.com ✨"
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
});

// Optional: Auto-rotate tooltip messages
setInterval(() => {
  const tips = ["Trending: Kawaii phone cases!", "Follow us on Instagram!"];
  document.querySelector('.tooltip').textContent = tips[Math.floor(Math.random() * tips.length)];
}, 10000);