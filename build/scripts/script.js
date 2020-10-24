let currentSlide = 0;
const slides = document.getElementsByClassName("cr_Img");
const slideCount = slides.length;

function showSlide(index) {
  for (let i = 0; i < slideCount; i++) {
    slides[i].classList.add("img_hidden");
  }

  slides[index].classList.remove("img_hidden");
}

function switchSlides(offset) {
  if (typeof offset != "number") {
    return;
  }

  if (offset !== 1 && offset !== -1) {
    return;
  }

  if (offset + currentSlide < 0) {
    currentSlide = slideCount - 1;
  } else if (offset + currentSlide >= slideCount) {
    currentSlide = 0;
  } else {
    currentSlide = offset + currentSlide;
  }

  showSlide(currentSlide);
}
