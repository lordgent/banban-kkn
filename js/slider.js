let currentSlide = 0;
const slideInterval = 3000;

const showSlide = (index) => {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
};

const moveSlide = (direction) => {
  showSlide(currentSlide + direction);
};

const startAutoSlide = () => {
  setInterval(() => {
    moveSlide(1);
  }, slideInterval);
};

showSlide(currentSlide);
startAutoSlide();
