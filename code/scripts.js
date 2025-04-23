document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });

    // Timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Timeline item expansion
    document.querySelectorAll('.timeline-content').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Email sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send email. Please try again.');
                });
        });
    }
});
