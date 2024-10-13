

// Select the book now button and form
const bookNowBtn = document.querySelector(".hero-btn.book-now-btn");
const bookNowForm = document.querySelector(".book-now-form");

if (bookNowBtn && bookNowForm) {
    bookNowBtn.addEventListener("click", () => {
        bookNowForm.style.display = bookNowForm.style.display === "block" ? "none" : "block";
    });

    const closeButton = bookNowForm.querySelector(".close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            bookNowForm.style.display = "none";
        });
    }

    document.addEventListener("click", (e) => {
        if (e.target !== bookNowForm && !bookNowForm.contains(e.target) && e.target !== bookNowBtn) {
            bookNowForm.style.display = "none";
        }
    });
}

// AJAX Submission for Booking Form
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(this); // Collect form data

    fetch('submit_booking.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success or error message
        if (data.status === 'success') {
            this.reset(); // Reset form fields
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form.');
    });
});

// AJAX Submission for Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(this); // Collect form data

    fetch('submit_contact.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success or error message
        if (data.status === 'success') {
            this.reset(); // Reset form fields
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form.');
    });
})

// Define slideshow functions
let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  if (slides.length > 0 && dots.length > 0) {
    // Reset n if it exceeds or is less than the number of slides
    if (n > slides.length) n = 1;
    if (n < 1) n = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
    slideIndex = n;
  } else {
    console.error("Missing slides or dots");
  }
}

// Event listeners for previous and next buttons
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    plusSlides(-1);
  });

  nextButton.addEventListener("click", () => {
    plusSlides(1);
  });
} else {
  console.error("Missing previous or next button");
}

// Form Validation and Submission
const form = document.getElementById('myForm');
const contactInput = document.getElementById('contact');
const messageTextarea = document.getElementById('message');

form.addEventListener('submit', (e) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  let isValid = true;

  if (!emailRegex.test(contactInput.value) && !phoneRegex.test(contactInput.value)) {
    e.preventDefault();
    displayErrorMessage('Invalid phone number or email format.');
    isValid = false;
  } else if (messageTextarea.value.trim() === '') {
    e.preventDefault();
    displayErrorMessage('Please enter a message.');
    isValid = false;
  }

  if (isValid) {
    e.preventDefault(); // Prevent default submission

    const contactValue = contactInput.value;
    const messageValue = messageTextarea.value;

    // Push data to Firebase
    set(ref(database, 'bookings/' + Date.now()), {
      contact: contactValue,
      message: messageValue,
    })
    .then(() => {
      displaySuccessMessage('Your booking has been submitted successfully!');
      form.reset(); // Reset form fields
    })
    .catch((error) => {
      console.error("Error writing to Firebase: ", error);
      displayErrorMessage("There was an error submitting your form. Please try again.");
    });
  }
});

// Display Error Message
function displayErrorMessage(message) {
  const errorMessageElement = document.createElement('div');
  errorMessageElement.classList.add('error-message');
  errorMessageElement.textContent = message;
  form.insertBefore(errorMessageElement, form.firstChild);
  setTimeout(() => {
    errorMessageElement.remove();
  }, 5000);
}

// Display Success Message
function displaySuccessMessage(message) {
  const successMessageElement = document.createElement('div');
  successMessageElement.classList.add('success-message');
  successMessageElement.textContent = message;
  form.insertBefore(successMessageElement, form.firstChild);
  setTimeout(() => {
    successMessageElement.remove();
  }, 5000);
}

// Remove Error Message on Input Change
contactInput.addEventListener('input', () => {
  const errorMessageElement = form.querySelector('.error-message');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
});

messageTextarea.addEventListener('input', () => {
  const errorMessageElement = form.querySelector('.error-message');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
});

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

aboutUsLink.addEventListener('click', () => {
  document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
});

policiesLink.addEventListener('click', () => {
  document.getElementById('policies').scrollIntoView({ behavior: 'smooth' });
});

const captchaCanvas = document.getElementById('captcha-canvas');
const captchaCtx = captchaCanvas.getContext('2d');
const captchaCode = Math.random().toString(36).substring(2, 6);
captchaCtx.font = '16px Arial';
captchaCtx.textAlign = 'center';
captchaCtx.textBaseline = 'middle';
captchaCtx.fillStyle = '#000';
captchaCtx.fillText(captchaCode, 50, 15);

// Validate CAPTCHA
document.getElementById('contactForm').addEventListener('submit', (e) => {
    const userCaptcha = document.getElementById('captcha').value;
    if (userCaptcha !== captchaCode) {
      e.preventDefault();
      alert('Invalid CAPTCHA code');
    }
});