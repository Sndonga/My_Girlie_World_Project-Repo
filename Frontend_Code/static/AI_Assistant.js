// ===== AI ASSISTANT ("Magic") =====
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const aiButton = document.createElement('div');
  aiButton.id = 'ai-button';
  document.body.appendChild(aiButton);

  const aiChat = document.createElement('div');
  aiChat.id = 'ai-chat';
  aiChat.innerHTML = `
    <div class="ai-header">
      <h3>Lila 💖</h3>
      <span class="close-chat">&times;</span>
    </div>
    <div class="ai-messages"></div>
    <div class="ai-input">
      <input type="text" placeholder="Ask Magic for style advice...">
      <button id="send-ai">Send</button>
    </div>
  `;
  document.body.appendChild(aiChat);

  // State
  let isChatOpen = false;
  const products = [
    { id: 1, name: 'Pastel Ankara Dress', price: 1499 },
    { id: 2, name: 'Kawaii Pearl Earrings', price: 599 }
  ];

  // Toggle Chat
  aiButton.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    aiChat.style.display = isChatOpen ? 'block' : 'none';
    if (isChatOpen) addAiMessage("Hello love! 🌸 How can I help you today?", 'ai');
  });

  // Close Chat
  document.querySelector('.close-chat').addEventListener('click', () => {
    isChatOpen = false;
    aiChat.style.display = 'none';
  });

  // Send Message
  document.getElementById('send-ai').addEventListener('click', sendMessage);
  document.querySelector('.ai-input input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Mock AI Responses
  function sendMessage() {
    const input = document.querySelector('.ai-input input');
    const userMessage = input.value.trim();
    if (!userMessage) return;

    addAiMessage(userMessage, 'user');
    input.value = '';

    // Simulate typing delay
    setTimeout(() => {
      const response = generateAiResponse(userMessage);
      addAiMessage(response, 'ai');
    }, 1000);
  }

  function generateAiResponse(userMessage) {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes('dress') || lowerMsg.includes('outfit')) {
      const product = products[0];
      return `Try our ${product.name} (KSh ${product.price})! 💃 <button class="ai-product-btn" data-id="${product.id}">Add to Cart</button>`;
    } else if (lowerMsg.includes('earrings') || lowerMsg.includes('jewelry')) {
      const product = products[1];
      return `How about these ${product.name}? ✨ <button class="ai-product-btn" data-id="${product.id}">Add to Cart</button>`;
    } else {
      return "I’d love to help! Describe your style or browse our <a href='#products'>products</a>.";
    }
  }

  // Add Messages to Chat
  function addAiMessage(text, sender) {
    const messagesDiv = document.querySelector('.ai-messages');
    const message = document.createElement('div');
    message.className = `ai-message ${sender}`;
    message.innerHTML = text;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Handle product buttons in AI responses
    if (sender === 'ai') {
      setTimeout(() => {
        document.querySelectorAll('.ai-product-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            addToCart(parseInt(productId));
            addAiMessage(`Added to cart! 🛍️`, 'ai');
          });
        });
      }, 100);
    }
  }

  // Cart Integration (Mock)
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    console.log(`Added ${product.name} to cart!`); // Replace with actual cart logic
    updateCartCount();
  }

  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  }
});