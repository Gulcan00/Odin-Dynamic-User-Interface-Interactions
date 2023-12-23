function generateImage() {
  const image = document.createElement("img");
  const randNum = Math.floor(Math.random() * 1000) + 1;
  image.src = `https://picsum.photos/id/${randNum}/500/500`;
  image.style.borderRadius = "6px";
  return image;
}

function domController() {
  const slider = document.querySelector(".slider");
  const rightArrow = document.querySelector(".arrow.right");
  const leftArrow = document.querySelector(".arrow.left");
  let currentSlide = 0;

  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());

  function next() {
    currentSlide++;
    if (currentSlide === 6) {
      currentSlide = 0;
    }

    let translateValue = -500 * currentSlide;
    slider.style.transform = `translateX(${translateValue}px)`;
  }

  rightArrow.addEventListener("click", next);

  function prev() {
    currentSlide--;
    if (currentSlide === -1) {
      currentSlide = 5;
    }

    let translateValue = -500 * currentSlide;
    slider.style.transform = `translateX(${translateValue}px)`;
  }

  leftArrow.addEventListener("click", prev);
}

domController();
