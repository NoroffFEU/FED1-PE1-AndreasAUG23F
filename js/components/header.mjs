export function handleLoginHeaderAndFooter() {
  const isFrontPage = !(
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account")
  );

  const loginHeader = document.querySelector("#login.header-a");
  const registerHeader = document.querySelector("#register.header-a");
  const loginFooter = document.querySelector("#login.footer-a");
  const registerFooter = document.querySelector("#register.footer-a");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const updateLoginLink = (loginElement) => {
    if (userInfo) {
      loginElement.innerText = "LOGOUT";
      loginElement.addEventListener("click", () => {
        localStorage.removeItem("userInfo");
        if (isFrontPage) {
          window.location.href = "index.html";
        } else {
          window.location.href = "../index.html";
        }
      });
    } else {
      loginElement.innerText = "LOGIN";
      if (isFrontPage) {
        loginElement.href = "account/login.html";
      } else {
        loginElement.href = "../account/login.html";
      }
    }
  };

  const updateRegisterLink = (registerElement) => {
    if (userInfo) {
      registerElement.innerText = "CREATE POST";
      if (isFrontPage) {
        registerElement.href = "post/create.html";
      } else {
        registerElement.href = "../post/create.html";
      }
    } else {
      registerElement.innerText = "REGISTER";
      if (isFrontPage) {
        registerElement.href = "account/register.html";
      } else {
        registerElement.href = "../account/register.html";
      }
    }
  };

  if (loginHeader) updateLoginLink(loginHeader);
  if (registerHeader) updateRegisterLink(registerHeader);
  if (loginFooter) updateLoginLink(loginFooter);
  if (registerFooter) updateRegisterLink(registerFooter);
}
