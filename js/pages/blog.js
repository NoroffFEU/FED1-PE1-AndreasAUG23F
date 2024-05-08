import { doFetch } from "../components/fetch.js";

const runPage = async () => {
    makePage();
};

const makePage = async () => {
    const id = window.location.search.slice(1)
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
}







    runPage();
    