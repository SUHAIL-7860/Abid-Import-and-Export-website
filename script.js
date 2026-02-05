document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // For real email sending, integrate with Formspree (https://formspree.io/) or a backend service.
});