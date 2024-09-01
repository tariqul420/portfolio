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