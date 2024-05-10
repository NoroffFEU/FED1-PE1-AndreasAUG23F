
import { doFetch } from "../components/fetch.js";


const runPage = async () => {
  let blogs = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Swagdaddy"
    );
    console.log("blogsInfo", blogs);
    /* carousel(blogs);  */
    blogGrid(blogs);
  };
  
  
  
/*     const carousel = (blogs) => {
    let slideIndex = 0;
    showSlides();
    

    function showSlides() {
        const slidesContainer = document.getElementById("slideshow-container");
        
        
        const prevButton = document.createElement("button");
        prevButton.classList.add("prev");
        prevButton.textContent = "❮";
        prevButton.onclick = () => plusSlides(-1);

        const nextButton = document.createElement("button");
        nextButton.classList.add("next");
        nextButton.textContent = "❯";
        nextButton.onclick = () => plusSlides(1);

        const readMoreButton = document.createElement("a");
        readMoreButton.textContent = "Read More";
        readMoreButton.classList.add("read-more-a", "carouselButton");


        blogs.slice(-3).forEach((blog, index) => {
            const slide = document.createElement("div");
            slide.classList.add("mySlides");

            const image = document.createElement("img");
            image.src = blog.media.url;
            image.alt = blog.title;

            slide.appendChild(image,readMoreButton);
            slidesContainer.appendChild(slide);
        });


        slidesContainer.append(prevButton, nextButton,);

        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 37) {
            plusSlides(-1);
        } else if (event.keyCode === 39) {
            plusSlides(1);
        }
    });
};  
 */








const blogGrid = (blogs) => {
  let section = document.getElementById('blogSection');

  blogs.forEach(blog => {
    let container = document.createElement('div');
    container.classList.add('blogContainer');
    container.id = 'blogContainer';

    let imageContainer = document.createElement('div');
    imageContainer.classList.add('blog-image');

    let image = document.createElement('img');
    image.src = blog.media.url;
    image.alt = blog.media.alt;

    let titleContainer = document.createElement('div');
    titleContainer.classList.add('blog-title');

    let title = document.createElement('h2');
    title.classList.add('blogCardTitle');
    title.textContent = blog.title;

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('readMoreButton');

    let button = document.createElement('button');
    button.textContent = 'Read More';
    button.classList.add('read-more-a');

    button.addEventListener('click', () => {
        window.location.href = `/post/index.html?`+ blog.id;
    });

    buttonContainer.appendChild(button);
    titleContainer.appendChild(title);
    imageContainer.appendChild(image);

    container.appendChild(imageContainer);
    container.appendChild(titleContainer);
    container.appendChild(buttonContainer);

    section.appendChild(container);


});

return section;
}



runPage(); 





/* const runPage = async () => {
  let blogs = await doFetch(
      "GET",
      "https://v2.api.noroff.dev/blog/posts/Swagdaddy"
  );
  console.log("blogsInfo", blogs);
  carousel(blogs);
  blogGrid(blogs);
};





const carousel = (blogs) => {
  let slideIndex = 0;
  const slidesContainer = document.getElementById("slideshow-container");

  const prevButton = document.createElement("a");
  prevButton.classList.add("prev");
  prevButton.textContent = "❮";
  prevButton.onclick = () => plusSlides(-1);

  const nextButton = document.createElement("a");
  nextButton.classList.add("next");
  nextButton.textContent = "❯";
  nextButton.onclick = () => plusSlides(1);

  const readMoreButton = document.createElement("button");
  readMoreButton.textContent = "Read More";
  readMoreButton.classList.add("read-more-a", "carouselButton");
  readMoreButton.addEventListener('click', () => {
      const currentSlideIndex = (slideIndex % blogs.length) + blogs.length;
      window.location.href = `/post/index.html?${blogs[currentSlideIndex % blogs.length].id}`;
  });

  blogs.slice(-3).forEach((blog, index) => {
      const slide = document.createElement("div");
      slide.classList.add("mySlides");

      const image = document.createElement("img");
      image.src = blog.media.url;
      image.alt = blog.title;

      slide.appendChild(image);
      slidesContainer.appendChild(slide);
  });

  slidesContainer.append(prevButton, nextButton, readMoreButton);

  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  function plusSlides(n) {
      showSlides((slideIndex += n));
  }

  document.addEventListener("keydown", function (event) {
      if (event.keyCode === 37) {
          plusSlides(-1);
      } else if (event.keyCode === 39) {
          plusSlides(1);
      }
  });
};

const blogGrid = (blogs) => {
  let section = document.getElementById('blogSection');

  blogs.forEach(blog => {
      let container = document.createElement('div');
      container.classList.add('blogContainer');
      container.id = 'blogContainer';

      let imageContainer = document.createElement('div');
      imageContainer.classList.add('blog-image');

      let image = document.createElement('img');
      image.src = blog.media.url;
      image.alt = blog.media.alt;

      let titleContainer = document.createElement('div');
      titleContainer.classList.add('blog-title');

      let title = document.createElement('h2');
      title.classList.add('blogCardTitle');
      title.textContent = blog.title;

      let buttonContainer = document.createElement('div');
      buttonContainer.classList.add('readMoreButton');

      let button = document.createElement('button');
      button.textContent = 'Read More';
      button.classList.add('read-more-a');

      button.addEventListener('click', () => {
          window.location.href = `/post/index.html?` + blog.id;
      });

      buttonContainer.appendChild(button);
      titleContainer.appendChild(title);
      imageContainer.appendChild(image);

      container.appendChild(imageContainer);
      container.appendChild(titleContainer);
      container.appendChild(buttonContainer);

      section.appendChild(container);
  });

  return section;
}

runPage();
 */