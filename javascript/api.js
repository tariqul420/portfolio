const skillFunction = async () => {
  const api = await fetch("../json/skill.json");
  const data = await api.json();
  const allData = data["skill"];

  const skillContainer = document.getElementById("skill-container");

  allData.forEach((skill) => {
    const {image, name} = skill;

    const card = document.createElement("div");
    card.className = "flex flex-col items-center justify-center space-y-3 lang";
    card.innerHTML = `
        <img class="w-10 h-10 object-contain" src="${image}" alt="" />
        <p class="font-bold text-dark-lite tracking-widest dark:text-white-deep">${name}</p>
    `
    skillContainer.append(card)
  })
};


const workFunction = async () => {
  const api = await fetch("../json/works.json");
  const data = await api.json();
  const allData = data["works"];

  const allCardContainer = document.getElementById("work-card-container");

  allData.forEach((data) => {
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

skillFunction();
workFunction();