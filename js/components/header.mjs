export function handleLoginHeader() {
  const isFrontPage = !(
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account")
  );
  const login = document.querySelector("#login");
  const register = document.querySelector("#register");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo) {
    login.innerText = "LOGOUT";
    login.addEventListener("click", () => {
      localStorage.removeItem("userInfo");
      if (isFrontPage) {
        window.location.href = "index.html";
      } else {
      }
      window.location.href = "../index.html";
    });
  } else {
    login.innerText = "LOGIN";
    if (isFrontPage) {
      login.href = "account/login.html";
    } else {
      login.href = "../account/login.html";
    }
  }

  if (userInfo) {
    register.innerText = "CREATE POST";
    if (isFrontPage) {
      register.href = "post/create.html";
    } else {
      register.href = "../post/create.html";
    }
  } else {
    register.innerText = "REGISTER";
    if (isFrontPage) {
      register.href = "account/register.html";
    } else {
      register.href = "../account/register.html";
    }
  }
}
