// main.js - Consolidated and organized

// ===== Theme Management =====
const initThemeToggle = () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Toggle handler
  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
};

// ===== Avatar System =====
const initAvatar = () => {
  const avatar = document.getElementById('site-avatar');
  if (!avatar) return;

  const messages = [
    "Pro Tip: Free delivery on orders over KES 3000! 🚚",
    "New pastel bows just restocked! 🎀", 
    "Need help? Email us at hello@mygirlieworld.com ✨"
  ];

  // Click handler
  avatar.addEventListener('click', () => {
    alert(messages[Math.floor(Math.random() * messages.length)]);
  });

  // Tooltip rotation (if tooltip exists)
  const tooltip = avatar.querySelector('.tooltip');
  if (tooltip) {
    let currentMessage = 0;
    setInterval(() => {
      tooltip.textContent = messages[currentMessage];
      currentMessage = (currentMessage + 1) % messages.length;
    }, 10000);
  }
};

// ===== Product Fetching =====
const fetchProducts = () => {
  fetch("http://localhost:5000/api/products")
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(products => {
      console.log("Products:", products);
      // Render products logic here
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
};

// ===== Payment Handler =====
const initPayment = () => {
  const payButton = document.getElementById('pay-button');
  if (!payButton) return;

  payButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/pay', { 
        method: 'POST' 
      });
      
      if (!response.ok) throw new Error('Payment failed');
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment request failed. Please try again.");
    }
  });
};

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initAvatar();
  fetchProducts();
  initPayment();
});