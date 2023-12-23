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
  const circles = document.querySelectorAll(".circle");
  let currentSlide = 0;

  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());
  slider.appendChild(generateImage());

  function setTransform() {
    const translateValue = -500 * currentSlide;
    slider.style.transform = `translateX(${translateValue}px)`;
  }

  function next() {
    currentSlide++;
    if (currentSlide === 6) {
      currentSlide = 0;
    }
    setTransform();
    const activeCircle = document.querySelector(".active");
    activeCircle.classList.remove("active");
    const currentCircle = document.querySelector(
      `.circle[data-slide="${currentSlide}"]`
    );
    currentCircle.classList.add("active");
  }

  rightArrow.addEventListener("click", next);

  function prev() {
    currentSlide--;
    if (currentSlide === -1) {
      currentSlide = 5;
    }

    setTransform();
    const activeCircle = document.querySelector(".active");
    activeCircle.classList.remove("active");
    const currentCircle = document.querySelector(
      `[data-slide="${currentSlide}"]`
    );
    currentCircle.classList.add("active");
  }

  leftArrow.addEventListener("click", prev);

  circles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
      const slide = e.target.dataset.slide;
      currentSlide = slide;
      setTransform();
      const activeCircle = document.querySelector(".active");
      activeCircle.classList.remove("active");
      circle.classList.add("active");
    });
  });

  setInterval(next, 5000);
}

domController();
