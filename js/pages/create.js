import { doFetch } from "../components/fetch.mjs";
import { handleLoginHeaderAndFooter } from "../components/header.mjs";
handleLoginHeaderAndFooter();

let form = document.getElementById("blogForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let postData = {
    title: formData.get("title"),
    body: formData.get("text"),
    media: {
      url: formData.get("image"),
      alt: "image for blog-post: " + formData.get("title"),
    },
  };
  console.log("postData:", postData);
  await doFetch(
    "POST",
    "https://v2.api.noroff.dev/blog/posts/Swagdaddy",
    postData
  );
  window.location.href = "../index.html";
});
