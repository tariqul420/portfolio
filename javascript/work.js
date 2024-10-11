const allCardContainer = document.getElementById("work-card-container");

const workDisplay = async () => {
  const api = await fetch("../json/works.json");
  const data = await api.json();
  const dataContainer = data["works"];

  dataContainer.forEach((data) => {
    const { image, heading, paragraph, tools, live } = data;
    const card = document.createElement("div");
    card.className = "slick-slide swiper-slide outline-none w-[307px]";
    card.innerHTML = `
                <div class="flex flex-col border rounded-[16px] w-full dark:border-primary2">
                  <img src="${image}" width="200" height="200" class="max-h-[200px] min-h-[200px] w-full object-cover rounded-t-[16px]" />
                  <div class="flex flex-col p-[14px]">
                    <h1 class="font-medium text-[#172635] text-start text-splice dark:text-white-lite">${heading}</h1>
                    <p class="text-xs text-[#172635]/60 text-start mt-[12px] dark:text-white-deep">${paragraph}</p>
                    <div class="flex gap-[6px] mt-[8px]">${tools.forEach((lang) => `<span class="language">${lang}</span>`)}</div>
                    <div class="flex justify-between items-center mt-5 cursor-pointer dark:text-white-deep">
                      <a href="${live}" target="_blank" class="flex items-center gap-[6px]"
                        ><i class="fa-solid fa-link"></i><span class="text-[12px] underline">Live Preview</span></a>
                    </div>
                  </div>
                </div>
        `;
        allCardContainer.append(card)
  });
};

workDisplay();
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
