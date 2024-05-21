
    import { doFetch } from "../components/fetch.js";

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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


        let postedBy = document.createElement("p");
        postedBy.innerText = "Posted by: ";
        postedBy.classList.add("postedBy");
        author.parentNode.insertBefore(postedBy, author);
        
        let formattedDate = new Date(blog.created)

        let date = document.getElementById("updated");
        date.classList.add("updated");
        date.innerText = blog.updated;
        date.innerText = `${formattedDate.getDate()} ${months[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;
        
        let content = document.getElementById("body");
        content.innerHTML = blog.body;
        
    
        
        setBlogBackground(blog.media.url);

        const elements = document.querySelectorAll("#blogContainer div");
        elements.forEach(element => {
            element.classList.add("visible");
        });
    };
    
    
    const setBlogBackground = (imageUrl) => {
        const blogContainer = document.getElementById('blogContainer');
        blogContainer.style.background = `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url(${imageUrl}) center center no-repeat`;
        blogContainer.style.backgroundSize = 'cover';


    };
    
    runPage();
    
    