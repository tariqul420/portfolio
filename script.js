// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme :dark)").matches;

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

// Manual Theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// Call Theme switch on Click Button
sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

// Invoke Theme Check on Initial lode
themeCheck();

// ? Img slider
const carousel = document.querySelector('.carousel-wrapper');
const dotsContainer = document.querySelector('.carousel-dots');
const cards = document.querySelectorAll('.card');
const cardCount = cards.length;
const cardsVisible = 1;
let currentIndex = 0;

function createDots() {
    for (let i = 0; i < Math.ceil(cardCount / cardsVisible); i++) {
        const dot = document.createElement('button');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    dotsContainer.querySelectorAll('button').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % Math.ceil(cardCount / cardsVisible);
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

createDots();
updateCarousel();
setInterval(showNextCard, 3000); // Auto-slide every 3 seconds
