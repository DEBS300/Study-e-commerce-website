
document.addEventListener('DOMContentLoaded', function() {

    
    const background = document.createElement('div');
    background.classList.add('background');
    document.body.prepend(background);  

    const numBubbles = 30; 

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        
        const size = Math.random() * 60 + 20; 
        const x = Math.random() * 100; 
        const animationDuration = Math.random() * 10 + 10; 

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}%`;
        bubble.style.animationDuration = `${animationDuration}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`; 

        background.appendChild(bubble);
    }

    
    if (document.location.pathname.includes('Homepage.html') || document.location.pathname === '/') {
        console.log("Welcome to the Student Success Hub!");
    }

    
    const contactForm = document.querySelector('.message-form form'); 

    if (contactForm) { 
      contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            isValid = false;
            nameInput.focus();
        } else if (!emailInput.value.trim()) {
            alert('Please enter your email.');
            isValid = false;
            emailInput.focus();
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
            emailInput.focus();
        } else if (!messageInput.value.trim()) {
            alert('Please enter a message.');
            isValid = false;
            messageInput.focus();
        }

        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert("Your message has been sent successfully!"); 
            event.preventDefault(); 
        }

      });

      function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      }
    }


    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = 'Back to Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});
