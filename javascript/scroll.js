document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav  a");
  const contactLink = document.querySelector("#contactLink");

  // Function to remove active classes from all nav links and sections
  function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove("active"));
    sections.forEach(section => section.classList.remove("active-section"));
    contactLink.classList.remove("active-link");
  }

  // Intersection observer callback function
  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        removeActiveClasses();
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
        entry.target.classList.add("active-section");

        // Special handling for the contact section
        if (id === "contact") {
          contactLink.classList.add("active-link");
        }
      }
    });
  }

  // Create the intersection observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });

  // Observe each section
  sections.forEach(section => observer.observe(section));
});
