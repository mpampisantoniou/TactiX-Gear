// Responsive Navbar
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.querySelector("ul").classList.toggle("active");
});

// Year Update
document.getElementById("year").textContent = new Date().getFullYear();

// Simple Cart System
let cartCount = 0;
const cartBtn = document.getElementById("cart-btn");
const cartCountEl = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartCountEl.textContent = cartCount;
        alert(`${btn.dataset.name} added to cart!`);
    });
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    contactForm.reset();
});
const heroBgs = document.querySelectorAll(".hero-bg");

const images = [
  "images/img12.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg"
];

let currentIndex = 0;
let nextIndex = 1;

// Set initial images
heroBgs[0].style.backgroundImage = `url('${images[currentIndex]}')`;
heroBgs[1].style.backgroundImage = `url('${images[nextIndex]}')`;

function changeBackground() {
  // Determine which is active
  const current = heroBgs[0];
  const next = heroBgs[1];

  // Set next image
  currentIndex = (currentIndex + 1) % images.length;
  nextIndex = (currentIndex + 1) % images.length;

  // Update the next layer’s background
  next.style.backgroundImage = `url('${images[currentIndex]}')`;

  // Fade in next layer
  next.classList.add("current");

  // Fade out current layer
  current.classList.remove("current");

  // Swap z-index order after transition
  setTimeout(() => {
    // swap their roles for the next cycle
    heroBgs[0].style.zIndex = 0;
    heroBgs[1].style.zIndex = 0;
    heroBgs[0].classList.remove("current");
    heroBgs[1].classList.add("current");

    // Rotate array references (swap them)
    const temp = heroBgs[0];
    heroBgs[0] = heroBgs[1];
    heroBgs[1] = temp;
  }, 1200); // matches CSS fade time
}

// Run slideshow every 6 seconds
setInterval(changeBackground, 5000);





