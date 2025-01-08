
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('form');
  
   
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
  
     
      const name = document.querySelector('#name').value.trim();
      const petName = document.querySelector('#pet-name').value.trim();
      const petType = document.querySelector('#pet-type').value;
      const service = document.querySelector('#service').value;
      const dateTime = document.querySelector('#date-time').value;
      const contact = document.querySelector('#contact').value.trim();
  
      // Simple validation
      if (!name || !petName || !petType || !service || !dateTime || !contact) {
        alert('Please fill out all required fields.');
        return;
      }
  
      if (!validateEmail(contact)) {
        alert('Please enter a valid email address.');
        return;
      }
  
     
      alert('Thank you! Your appointment request has been submitted.');
      form.reset(); 
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  
