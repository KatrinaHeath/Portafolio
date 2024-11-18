document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    });
  });
});