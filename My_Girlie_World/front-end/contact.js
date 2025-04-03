// js/contact.js
 document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // 1. Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); // Converts to {name: "...", email: "...", ...}
  
    // 2. Send to backend
    try {
      const response = await fetch('https://my-girlie-world.onrender.com/api/contact', {
        method: 'POST', // Required for sending data
        headers: {
          'Content-Type': 'application/json' // Tells backend we're sending JSON
        },
        body: JSON.stringify(data) // Convert object to JSON string
      });
  
      // 3. Handle response
      if (response.ok) {
        alert("Message sent! 💌");
        e.target.reset(); // Clear form
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (err) {
      alert("Network error. Try again later.");
    }
  });