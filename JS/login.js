const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    autoplay: true,
    pauseOnMouseEnter: true,
    disableOnInteraction: true,
    

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});

document.getElementById("menu-icon").addEventListener("click", function () {
    var sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.display === "none") {
        sideMenu.style.display = "block";
    } else {
        sideMenu.style.display = "none";
    }
});