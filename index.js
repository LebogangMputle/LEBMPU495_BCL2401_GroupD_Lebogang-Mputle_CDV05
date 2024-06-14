// Typing effect for the "I'm a Web developer" text
const typingText = document.querySelector('.typing-text span');
const text = "Web Developer, Front-End Enthusiast"; // Change this to your desired text

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Smooth scrolling for navigation links
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
