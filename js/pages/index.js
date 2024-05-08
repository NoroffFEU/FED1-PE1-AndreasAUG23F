import { doFetch } from "../components/fetch.js";
const runPage = async () => {
  let blogs = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Swagdaddy"
  );
  console.log("blogsInfo", blogs);
  carousel();
  blogGrid(blogs);
};
/* const carousel = () => {
  let slideIndex = 1;
  showSlides();
  
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
  });
  
  document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
  });
  
  // Legg til automatisk bildebytte hvert 3. sekund (3000 ms)
  setInterval(function () {
    plusSlides(1);
  }, 3000);

} */


const carousel = async () => {
  // Hent de siste 3 bloggpostene fra API-et
  const response = await doFetch("GET", "https://v2.api.noroff.dev/blog/posts");
  const blogs = await response.json();
  const latestBlogs = blogs.slice(-3); // Velg de siste 3 bloggpostene

  // Oppdater karusellen med bildene og informasjonen om de siste 3 bloggpostene
  latestBlogs.forEach((blog, index) => {
    const slide = document.querySelector(`.mySlides:nth-child(${index + 1})`);

    // Oppdater bilde
    const image = slide.querySelector("img");
    image.src = blog.image; // Bytt ut med riktig kilde fra API-et
    image.alt = blog.title; // Sett riktig alternativ tekst fra API-et

    // Oppdater tittel
    const title = slide.querySelector("h2");
    title.textContent = blog.title; // Sett riktig tittel fra API-et

    // Vis slide
    slide.style.display = "block";
  });
};

carousel(); // Kjør karusellen når siden lastes





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

  return container;
}



runPage();

