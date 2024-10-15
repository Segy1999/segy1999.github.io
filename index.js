// Slideshow functionality
const slideshow = document.getElementById('slideshow');
const slides = slideshow.children;
let currentSlide = 0;

function showSlide(index) {
    slideshow.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Book Now button functionality
const bookNowBtn = document.querySelector(".hero-btn.book-now-btn");
const bookNowForm = document.querySelector(".book-now-form");
const closeBookNowForm = document.getElementById('closeBookNowForm');

if (bookNowBtn && bookNowForm) {
    bookNowBtn.addEventListener("click", () => {
        bookNowForm.style.display = bookNowForm.style.display === "block" ? "none" : "block";
    });

    closeBookNowForm.addEventListener("click", () => {
        bookNowForm.style.display = "none";
    });

    document.addEventListener("click", (e) => {
        if (e.target !== bookNowForm && !bookNowForm.contains(e.target) && e.target !== bookNowBtn) {
            bookNowForm.style.display = "none";
        }
    });
}

// AJAX Submission for Booking Form
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch('submit_booking.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data.message, data.status === 'success' ? 'success' : 'error');
        if (data.status === 'success') {
            this.reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('There was an error submitting your form.', 'error');
    });
});

// AJAX Submission for Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    // Validate CAPTCHA
    const userCaptcha = document.getElementById('captcha').value;
    if (userCaptcha !== captchaCode) {
        displayMessage('Invalid CAPTCHA code', 'error');
        return;
    }

    fetch('submit_contact.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data.message, data.status === 'success' ? 'success' : 'error');
        if (data.status === 'success') {
            this.reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('There was an error submitting your form.', 'error');
    });
});

// Form Validation
const form = document.getElementById('myForm');
const contactInput = document.getElementById('contact');
const messageTextarea = document.getElementById('message');

form.addEventListener('submit', (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let isValid = true;

    if (!emailRegex.test(contactInput.value) && !phoneRegex.test(contactInput.value)) {
        e.preventDefault();
        displayMessage('Invalid phone number or email format.', 'error');
        isValid = false;
    } else if (messageTextarea.value.trim() === '') {
        e.preventDefault();
        displayMessage('Please enter a message.', 'error');
        isValid = false;
    }

    if (isValid) {
        e.preventDefault();
        // Here you would typically send data to your backend or Firebase
        // For demonstration, we'll just show a success message
        displayMessage('Your booking has been submitted successfully!', 'success');
        form.reset();
    }
});

// Display Message (Error or Success)
function displayMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(type === 'success' ? 'success-message' : 'error-message');
    messageElement.textContent = message;
    form.insertBefore(messageElement, form.firstChild);
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Remove Error Message on Input Change
contactInput.addEventListener('input', removeErrorMessage);
messageTextarea.addEventListener('input', removeErrorMessage);

function removeErrorMessage() {
    const errorMessageElement = form.querySelector('.error-message');
    if (errorMessageElement) {
        errorMessageElement.remove();
    }
}

// Toggle Policy List Items using Event Delegation
const policiesList = document.getElementById('policies');

if (policiesList) {
    policiesList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('expanded');
        }
    });
}

// Animated Scrolling
const aboutUsLink = document.getElementById('about-us-link');
const policiesLink = document.getElementById('policies-link');

aboutUsLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
});

policiesLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('policies').scrollIntoView({ behavior: 'smooth' });
});

// CAPTCHA Generation
const captchaCanvas = document.getElementById('captcha-canvas');
const captchaCtx = captchaCanvas.getContext('2d');
const captchaCode = Math.random().toString(36).substring(2, 6);
captchaCtx.font = '16px Arial';
captchaCtx.textAlign = 'center';
captchaCtx.textBaseline = 'middle';
captchaCtx.fillStyle = '#000';
captchaCtx.fillText(captchaCode, 50, 15);