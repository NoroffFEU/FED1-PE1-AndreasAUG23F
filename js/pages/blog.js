
    import { doFetch } from "../components/fetch.js";

    const runPage = async () => {
        makePage();
    };
    
    const makePage = async () => {
        const id = window.location.search.slice(1);
        let blog = await doFetch(
            "GET",
            "https://v2.api.noroff.dev/blog/posts/Swagdaddy/" + id
        );
        console.log("blogsInfo", blog);
    
        let title = document.getElementById("blogHeader");
        title.innerText = blog.title;
    
        let author = document.getElementById("author");
        author.innerText = blog.author.name;
    
        let date = document.getElementById("updated");
        date.innerText = blog.updated;
    
        let content = document.getElementById("body");
        content.innerHTML = blog.body;
    
        
        setBlogBackground(blog.media.url);
    };
    
    
    const setBlogBackground = (imageUrl) => {
        const blogContainer = document.getElementById('blogContainer');
        blogContainer.style.background = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${imageUrl}) center center no-repeat`;
        blogContainer.style.backgroundSize = 'cover';


    };
    
    runPage();
    
    