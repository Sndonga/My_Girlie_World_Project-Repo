// Avatar interaction logic
const avatar = document.getElementById("site-avatar");

// Example: Change tooltip message every 10 seconds
const messages = [
  "New bows in stock! 🎀",
  "Free delivery this week! 🚚",
  "Follow us on Instagram! 📱"
];

let currentMessage = 0;
setInterval(() => {
  avatar.querySelector(".tooltip").textContent = messages[currentMessage];
  currentMessage = (currentMessage + 1) % messages.length;
}, 10000);