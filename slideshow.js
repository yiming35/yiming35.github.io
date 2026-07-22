const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slideshow-button');
let slideIndex = [...slides].findIndex((slide) => slide.classList.contains('active'));

if (slideIndex === -1 && slides.length > 0) {
  slideIndex = 0;
}

slides.forEach((slide, index) => slide.classList.toggle('active', index === slideIndex));

function moveSlide(step) {
  if (slides.length === 0) return;

  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

buttons.forEach((button) => {
  button.addEventListener('click', () => moveSlide(Number(button.dataset.step)));
});
