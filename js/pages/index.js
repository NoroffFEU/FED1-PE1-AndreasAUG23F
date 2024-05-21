/* 
import { doFetch } from "../components/fetch.js";


const runPage = async () => {
  let blogs = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Swagdaddy"
    );
    console.log("blogsInfo", blogs);
    blogGrid(blogs);
    populateCarousel(blogs);
};




function populateCarousel(posts) {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    console.log(posts);

    posts.slice(0, slides.length).forEach((post, index) => {
        const slide = slides[index];
        slide.innerHTML = `
            <img class="post-media" src="${post.media.url}" alt="${post.media.alt}">
            <h2 class="post-title">${post.title}</h2>
            <a href="post/index.html?id=${post.id}&title=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.body)}&imageUrl=${encodeURIComponent(post.media.url)}&created=${encodeURIComponent(post.created)}&updated=${encodeURIComponent(post.updated)}&authorName=${encodeURIComponent(post.author.name)}" class="read-more-button">Read More</a>
        `;
    });

    slides[0].style.display = 'block';

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    function showPrevSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].style.display = 'block';
    }

    function showNextSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
    }
}






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




 */


import { carouselFunction } from "../components/carousel.mjs";
import { doFetch } from "../components/fetch.mjs";






document.addEventListener('DOMContentLoaded', async () => {
    const blogs = await doFetch(
        "GET",
        "https://v2.api.noroff.dev/blog/posts/Swagdaddy"
        );
        console.log("blogsInfo", blogs);
        blogGrid(blogs);
        blogCarousel(blogs);
});

const blogCarousel = (blogs) => {

    let latestPosts = blogs.slice(0, 3);

    latestPosts.forEach (blog => {
        let container = document.getElementById('carouselContainer');

        let blogContainer = document.createElement('div');
        blogContainer.className=('blogCarouselContainer visible');
        

        let image = document.createElement('img');
        image.src = blog.media.url;
        image.alt = blog.media.alt;

        let textBox = document.createElement('div');
        textBox.classList.add('carousel-text');

        let title = document.createElement('h2');
        title.textContent = blog.title;

        let button = document.createElement('button');
        button.classList.add('carouselCta');
        button.textContent = 'Read More';
        button.onclick = () => {
            window.location.href = `/post/index.html?`+ blog.id;
        }

        container.appendChild(blogContainer);
        blogContainer.append(image, textBox);
        textBox.append(title, button);
    })

    carouselFunction();
}


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
