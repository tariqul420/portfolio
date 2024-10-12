const skillFunction = async () => {
  const api = await fetch("../json/skill.json");
  const data = await api.json();
  const allData = data["skill"];

  const skillContainer = document.getElementById("skill-container");

  allData.forEach((skill) => {
    const { image, name } = skill;

    const card = document.createElement("div");
    card.className = "flex flex-col items-center justify-center space-y-3 lang";
    card.innerHTML = `
        <img class="w-10 h-10 object-contain" src="${image}" alt="" />
        <p class="font-bold text-dark-lite tracking-widest dark:text-white-deep">${name}</p>
    `;
    skillContainer.append(card);
  });
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
                  <img src="${image}" class="max-h-[200px] min-h-[200px] w-full object-cover rounded-t-[16px]" />
                  <div class="flex flex-col p-[14px]">
                    <h1 class="font-medium text-[#172635] text-start text-splice dark:text-white-lite">${heading}</h1>
                    <p class="text-xs text-[#172635]/60 text-start mt-[12px] dark:text-white-deep">${paragraph}</p>
                    <div class="flex gap-[6px] mt-[8px]">
                      <span class="language">${tools[0]}</span>
                      <span class="language">${tools[1]}</span>
                      <span class="language">${tools[2]}</span>
                      ${tools[3] ? '<span class="language">' + tools[3] + "</span>" : ""}
                    </div>
                    <div class="flex justify-between items-center mt-5 cursor-pointer dark:text-white-deep">
                      <a href="${live}" target="_blank" class="flex items-center gap-[6px]"><i class="fa-solid fa-link"></i><span class="text-[12px] underline">Live Preview</span></a>
                    </div>
                  </div>
                </div>
        `;
    allCardContainer.append(card);
  });
};

const experience = async () => {
  const api = await fetch("../json/experience.json");
  const data = await api.json();
  const allData = data["experience"];

  const experienceContainer = document.getElementById("experience");

  allData.forEach((data) => {
    const { heading, category, date, location, location2, name, link, description, tools } = data;
    const card = document.createElement("div");
    card.className = "collapse collapse-plus p-0 border border-solid w-11/12 lg:w-9/12 mt-4 dark:border-primary2";
    card.innerHTML = `
      <input type="radio" name="my-accordion-3" checked="checked" />
        <div class="collapse-title md:text-xl text-base font-medium sm:leading-[30px] flex justify-between dark:text-white-lite">
          <div>${heading} <span class="max-sm:hidden">${category}</span></div>
          <div>${date}</div>
        </div>

          <div class="collapse-content border-t border-solid dark:border-primary2">
            <div class="flex gap-10 max-sm:gap-5 pt-4 dark:fill-white-deep">
              <div class="flex items-center justify-center gap-2">
                <span><i class="fa-solid fa-location-dot text-[#000000B3] dark:text-white-deep"></i></span>
                <span class="text-xs sm:text-sm text-black/70 dark:text-white-deep">${location} <span class="max-sm:hidden">${location2}</span></span>
              </div>
              <div class="flex items-center justify-center gap-2">
                <span><i class="fa-solid fa-link text-[#000000B3] dark:text-white-deep"></i></span>
                <span class="text-xs sm:text-sm text-black/70 dark:text-white-deep hover:text-dark-deep"><a target="_blank" href="${link}">${name}</a></span>
              </div>
            </div>

            <div>
              <p class="mt-[10px] text-xs sm:text-sm sm:leading-[30px] text-start dark:text-[#e9e8e8]">${description}</p>
            </div>

            <div class="flex gap-[6px] mt-[12px] flex-wrap">
              <span class="language">${tools[0]}</span>
              <span class="language">${tools[1]}</span>
              <span class="language">${tools[2]}</span>
              ${tools[3] ? `<span class="language">${tools[3]}</span>` : ""}
              ${tools[4] ? `<span class="language">${tools[4]}</span>` : ""}
              ${tools[5] ? `<span class="language">${tools[5]}</span>` : ""}
              ${tools[6] ? `<span class="language">${tools[6]}</span>` : ""}
              ${tools[7] ? `<span class="language">${tools[7]}</span>` : ""}
              ${tools[8] ? `<span class="language">${tools[8]}</span>` : ""}
              ${tools[9] ? `<span class="language">${tools[9]}</span>` : ""}
            </div>
          </div>
    `;
    experienceContainer.append(card);
  });
};

const contactCard = async () => {
  const api = await fetch("../json/contact.json");
  const data = await api.json();
  const allData = data["contactCard"];

  const contactCardContainer = document.getElementById("contact-card-container");

  allData.forEach((data) => {
    const { image, name, linkLaptop, linkMobile } = data;
    const card = document.createElement("div");
    card.className = "justify-center items-center gap-6 max-sm:space-y-6 md:flex lg:flex-col md:items-center";
    card.innerHTML = `
      <div class="bg-[#172635] flex flex-col items-center justify-center w-[20.6rem] mx-auto h-[140px] rounded-xl border border-solid border-primary2 space-y-3 dark:bg-[#0c434d]">
        <img class="w-8" src="${image}" alt="" />
        <p class="text-white-deep font-medium">${name}</p>
        <p class="lg:hidden"><a target="_blank" class="text-primary1 w-full" href="${linkMobile}" rel="noreferrer">Send a message</a></p>
        <p class="hidden lg:block">
          <a target="_blank" class="text-primary1 w-full" href="${linkLaptop}" rel="noreferrer">Send a message</a>
        </p>
      </div>
    `;
    contactCardContainer.append(card);
  });
};

const socialMedia = async () => {
  const api = await fetch("../json/socialMedia.json");
  const data = await api.json();
  const allData = data["socialMedia"];

  const socialContainer = document.querySelectorAll(".social-icon");
  socialContainer.forEach((className) => {
    allData.forEach((data) => {
      const { link, image, alt} = data;
      const socialIcon = document.createElement("div");
      socialIcon.innerHTML = `
      <a target="_blank" href="${link}"><img class="w-8 lang" src="${image}" alt="${alt}" /></a>
      `;
      className.append(socialIcon);
    });
  });
};

skillFunction();
workFunction();
experience();
contactCard();
socialMedia();
