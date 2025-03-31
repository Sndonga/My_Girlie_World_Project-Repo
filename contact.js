// js/contact.js
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! We'll email you soon. 💌");
    e.target.reset(); // Clear form
  });
