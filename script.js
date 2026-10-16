const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const themeToggle = document.getElementById("themeToggle");
const sections = document.querySelectorAll("main section[id]");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// When a navigation item is clicked, scroll to its section and close mobile menu.
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Highlight the navigation link for the section currently on screen.
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

// Toggle between dark and light themes.
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const lightModeOn = document.body.classList.contains("light-theme");
  themeToggle.textContent = lightModeOn ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", lightModeOn ? "Switch to dark theme" : "Switch to light theme");
});

// A small rotating role line in the hero section.
const typingText = document.getElementById("typingText");
const roles = ["Aspiring Web Developer", "BCA Student", "Creative Learner"];
let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  typingText.style.opacity = "0";
  setTimeout(() => {
    typingText.textContent = roles[roleIndex];
    typingText.style.opacity = "1";
  }, 220);
}, 2600);

// The contact form prepares an email in the visitor's email application.
// To send messages directly from a website, connect a real form backend.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:kajal@example.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
