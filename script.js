// EmailJS initialization
(function() {
    emailjs.init('Fw1ixVaHajuXmaJYY'); // Use your EmailJS user ID
})();

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_gsyx76q', 'template_sf2xfzt', this)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Message failed: ' + error.text);
        });
});