import { doFetch } from "../components/fetch.mjs";
import { handleLoginHeader } from "../components/header.mjs";

const runPage = async () => {
  handleLoginHeader();
  const id = window.location.search.slice(1);

  const blog = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Swagdaddy/" + id
  );
  console.log("blogsInfo", blog);
  console.log(id);
  let url = document.getElementById("url");
  url.defaultValue = blog.media.url;

  let title = document.getElementById("title");
  title.defaultValue = blog.title;

  let text = document.getElementById("content");
  text.defaultValue = blog.body;

  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.onclick = () => {
    console.log("deleteBtn clicked");
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      doFetch("DELETE", "https://v2.api.noroff.dev/blog/posts/Swagdaddy/" + id);
      window.location.href = "../index.html";
    }
  };
  let form = document.getElementById("editForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    let postData = {
      title: formData.get("title"),
      body: formData.get("content"),
      media: {
        url: formData.get("url"),
        alt: "image",
      },
    };
    console.log("postData:", postData);
    await doFetch(
      "PUT",
      "https://v2.api.noroff.dev/blog/posts/Swagdaddy/" + id,
      postData
    );
    window.location.href = "index.html?" + id;
  });
};

runPage();
