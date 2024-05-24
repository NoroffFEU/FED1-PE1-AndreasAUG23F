import { carouselFunction } from "../components/carousel.mjs";
import { doFetch } from "../components/fetch.mjs";
import { handleLoginHeaderAndFooter } from "../components/header.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  const blogs = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Swagdaddy"
  );
  console.log("blogsInfo", blogs);
  blogGrid(blogs);
  blogCarousel(blogs);
  handleLoginHeaderAndFooter();
});

const blogCarousel = (blogs) => {
  let latestPosts = blogs.slice(0, 3);

  latestPosts.forEach((blog) => {
    let container = document.getElementById("carouselContainer");

    let blogContainer = document.createElement("div");
    blogContainer.className = "blogCarouselContainer visible";

    let image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = blog.media.alt;

    let textBox = document.createElement("div");
    textBox.classList.add("carousel-text");

    let title = document.createElement("h2");
    title.textContent = blog.title;

    let button = document.createElement("button");
    button.classList.add("carouselCta");
    button.textContent = "Read More";
    button.onclick = () => {
      window.location.href = `./post/index.html?` + blog.id;
    };

    container.appendChild(blogContainer);
    blogContainer.append(image, textBox);
    textBox.append(title, button);
  });

  carouselFunction();
};

const blogGrid = (blogs) => {
  let section = document.getElementById("blogSection");

  blogs.forEach((blog) => {
    let container = document.createElement("div");
    container.classList.add("blogContainer");
    container.id = "blogContainer";

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("blog-image");

    let image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = blog.media.alt;

    image.addEventListener("click", () => {
      window.location.href = `./post/index.html?` + blog.id;
    });

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("blog-title");

    let title = document.createElement("h2");
    title.classList.add("blogCardTitle");
    title.textContent = blog.title;

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("readMoreButton");

    let button = document.createElement("button");
    button.textContent = "Read More";
    button.classList.add("read-more-a");

    button.addEventListener("click", () => {
      window.location.href = `./post/index.html?` + blog.id;
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
};
