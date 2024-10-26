const slides = [
  {
    name: "After Dark",
    author: "Haruki Murakami",
    image: "/assets/img/afterdark.jpg",
    info: "The entire action of the novel takes place during one night in the center of Tokyo. The main character is a 19 &mdash; year-old student Marie, who spends the night in a coffee shop reading a book. There she meets Takahashi, a student who plays the trombone. Takahashi knows Mari &mdash; Eri's sister Asai, meanwhile, Eri herself is now in a deep sleep. Marie's paths cross with a woman, a former fighter who now works as an administrator at a love hotel; a Chinese prostitute who was beaten and robbed; a computer expert with sadistic tendencies. The plot unfolds between a dream and reality.",
  },
  {
    name: "The Secret History",
    author: "Donna Tartt",
    image: "/assets/img/secrethistory.jpg",
    info: "The plot centers on a group of classical students at one of the elite colleges in Vermont. The main character, Richard Papin, talks about his fascination with a mysterious and charismatic group led by a charismatic professor who explores ancient Greek culture and philosophy. As Richard delves into their world, he becomes a witness and participant in the dark events surrounding the murder, which shakes not only their friendship, but also the very existence of the group. The novel explores themes such as morality, art, beauty, and the consequences of human choices.",
  },
  {
    name: "East of Eden",
    author: "John Steinbeck",
    image: "/assets/img/eden.jpg",
    info: "The novel takes place in the Salina Valley in California, and its plot intersects with biblical motifs, especially the story of Cain and Abel. The main characters, such as Adam Trask and his sons Charlie and Adam, represent various aspects of human nature and the struggle between good and evil.",
  },
  {
    name: "The Alchemist",
    author: "Paulo Coelho",
    image: "/assets/img/alchemist.jpg",
    info: "The main character, the Spanish shepherd Santiago, dreams of traveling and searching for his personal legendary treasure. He decides to follow his dream, in which he was predicted that he would find treasure at the Egyptian pyramids. On his way, Santiago meets many characters, each of whom teaches him important life lessons. He meets the Cathedral King, who tells him about the importance of following his dreams, and the alchemist, who helps him realize the need for inner growth and self-discovery. The book explores the themes of wish fulfillment, the search for the meaning of life and the importance of listening to your heart. The basic idea is that everyone can achieve their goals if they follow their dreams and learn from life experiences. Book inspires readers to personal searches and discoveries, reminds them that the path to a dream is no less important than achieving the dream itself.",
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
      const { name, author, image, info } = slides[currentSlideIndex];
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

const TOTAL_SLIDES = 4;
let currentIndex = 0;

const dots = document.querySelectorAll(".dotSlider button");
const images = document.querySelectorAll(".imageSlider img");

function showSlide(index) {
  images.forEach((image) => (image.style.display = "none"));
  dots.forEach((dot) => (dot.style.backgroundColor = "transparent"));

  images[index].style.display = "block";
  dots[index].style.backgroundColor = "#000";
}

function gotoSlide(index) {
  currentIndex = (TOTAL_SLIDES + index) % TOTAL_SLIDES;
  showSlide(currentIndex);
}

function next() {
  gotoSlide(currentIndex + 1);
}

function prev() {
  gotoSlide(currentIndex - 1);
}

function dotClicked(index) {
  gotoSlide(index);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => dotClicked(index));
});

showSlide(currentIndex);


