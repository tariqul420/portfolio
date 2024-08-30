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
/* const carousel = document.querySelector('.carousel-wrapper');
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
setInterval(showNextCard, 3000); // Auto-slide every 3 seconds */


function sendEmail() {
  window.location.href = "mailto:tariqul.islam.programmer@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you.";
}

// ? Hide and Show
const content1 = document.getElementById('content1');

// Define the HTML you want to insert
const content01 = `<div class="flex justify-between items-center cursor-pointer select-none">
          <h1 class="text-xs sm:text-base font-medium text-start leading-4 sm:leading-[30px] w-fit">Frontend Web Developer @ Lelavtech</h1>
          <div class="flex items-center gap-5 cursor-pointer">
            <h3 class="text-xs sm:text-base font-medium leading-4 sm:leading-[30px] sm:text-auto text-end w-full cursor-pointer">Dec 2022 - Present</h3>
            <button aria-label="button" class="toggleButton">
              <svg class="cursor-pointer w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6" width="14" height="2" rx="1" fill="#00C16A"></rect><rect x="6" y="14" width="14" height="2" class="opacity-0 duration-300" rx="1" transform="rotate(-90 6 14)" fill="#00C16A"></rect></svg>
            </button>
          </div>
        </div>`;

// Insert the HTML into the selected element
content1.innerHTML = content01;

// ? ffffffffffffff
document.querySelectorAll('.toggleButton').forEach(button => {
  button.addEventListener('click', function () {
    const content = this.nextElementSibling; // Selects the next sibling element (the content div)

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.classList.add('visible');
    } else {
      content.classList.remove('visible');
      content.classList.add('hidden');
    }
  });
});

// two
const content2 = document.getElementById('content2');

// Define the HTML you want to insert
const content02 = `<div class="flex justify-between items-center cursor-pointer select-none">
          <h1 class="text-xs sm:text-base font-medium text-start leading-4 sm:leading-[30px] w-fit">Frontend Web Developer @ Freelancer</h1>
          <div class="flex items-center gap-5 cursor-pointer">
            <h3 class="text-xs sm:text-base font-medium leading-4 sm:leading-[30px] sm:text-auto text-end w-full cursor-pointer">Dec 2022 - Present</h3>
            <button aria-label="button" class="toggleButton">
              <svg class="cursor-pointer w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6" width="14" height="2" rx="1" fill="#00C16A"></rect><rect x="6" y="14" width="14" height="2" class="opacity-0 duration-300" rx="1" transform="rotate(-90 6 14)" fill="#00C16A"></rect></svg>
            </button>
          </div>
        </div>`;

// Insert the HTML into the selected element
content2.innerHTML = content02;

// ? ffffffffffffff
document.querySelectorAll('.toggleButton2').forEach(button => {
  button.addEventListener('click', function () {
    const content = this.nextElementSibling; // Selects the next sibling element (the content div)

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.classList.add('visible');
    } else {
      content.classList.remove('visible');
      content.classList.add('hidden');
    }
  });
});
