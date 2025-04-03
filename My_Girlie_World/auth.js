// auth.js
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Mock validation
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({
        email,
        name: email.split('@')[0] // Extract username
      }));
      window.location.href = 'dashboard.html'; // Redirect
    } else {
      alert('Please fill all fields!');
    }
  });