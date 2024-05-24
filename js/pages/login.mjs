import { doFetch } from "../components/fetch.mjs";
import { handleLoginHeaderAndFooter } from "../components/header.mjs";
handleLoginHeaderAndFooter();

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const postData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await doFetch(
    "POST",
    "https://v2.api.noroff.dev/auth/login",
    postData
  );

  if (!response) {
    alert("Invalid email or password");
    return;
  }

  localStorage.setItem("userInfo", JSON.stringify(response));
  window.location.href = "../index.html";
});

/* email: Swagdaddy@stud.noroff.no
password: Swagdaddy */
