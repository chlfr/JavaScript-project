const slides = [
    {
        name: "Death at Morning House",
        author: "Maureen Johnson",
        image: "assets/img/death.webp",
        info: "On Sale: August 6, 2024"
    },
    {
        name: "When the Moon Hatched",
        author: "Sarah A. Parker",
        image: "assets/img/imminent.webp",
        info: "On Sale: May 7, 2024"
    },
    {
        name: "Imminent",
        author: "Luis Elizondo",
        image: "assets/img/hatched.webp",
        info: "On Sale: August 20, 2024"
    },
    {
        name: "Over Ruled",
        author: "Anthony Horowitz",
        image: "assets/img/ruled.webp",
        info: "On Sale: April 16, 2024"
    },
    {
        name: "Close to Death",
        author: "Neil Gorsuch, Janie Nitze",
        image: "assets/img/close.webp",
        info: "On Sale: August 6, 2024"
    },
];

const sliderContainer = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlideIndex = 0;
const totalSlides = slides.length;

const displaySlides = () => {
    if (sliderContainer && nextBtn && prevBtn) {
        sliderContainer.style.opacity = 0;
        setTimeout(() => {
            const { name, job, image, info } = slides[currentSlideIndex];
            sliderContainer.innerHTML = `
            <div class="profile">
                <img src="${image}">
                <h3>${name}</h3>
                <h6>${author}</h6>
            </div>
            <p>${info}</p>
            `;
            sliderContainer.style.opacity = 1;
        }, 300);
    }
};

nextBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    displaySlides();
});

prevBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    displaySlides();
});

window.onload = displaySlides;