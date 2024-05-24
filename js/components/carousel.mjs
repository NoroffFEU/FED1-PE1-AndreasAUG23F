export const carouselFunction = () => {
  let prevBtn2 = document.querySelector(".prev-button2");
  let nextBtn2 = document.querySelector(".next-button2");

  let dots = document.querySelectorAll(".dot");

  let blogs = document.querySelectorAll(".blogCarouselContainer");

  let totalBlogs = blogs.length;
  let blogPosition = 0;

  const updatePosition = () => {
    for (let blog of blogs) {
      blog.classList.remove("visible");
      blog.classList.add("hidden");
    }
    blogs[blogPosition].classList.remove("hidden");
    blogs[blogPosition].classList.add("visible");

    for (let dot of dots) {
      dot.className = dot.className.replace(" active", "");
    }
    dots[blogPosition].classList.add("active");
  };

  updatePosition();

  const nextImage = () => {
    if (blogPosition === totalBlogs - 1) {
      blogPosition = 0;
    } else {
      blogPosition++;
    }
    updatePosition();
  };

  const prevImage = () => {
    if (blogPosition === 0) {
      blogPosition = totalBlogs - 1;
    } else {
      blogPosition--;
    }
    updatePosition();
  };

  nextBtn2.addEventListener("click", nextImage);
  prevBtn2.addEventListener("click", prevImage);

  dots.forEach((dot, dotPosition) => {
    dot.addEventListener("click", () => {
      blogPosition = dotPosition;
      updatePosition(dotPosition);
    });
  });
};
