
import { doFetch } from "../components/fetch.mjs";
import { handleLoginHeader } from "../components/header.mjs";
handleLoginHeader();

const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const postData = {
        name: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    const response = await doFetch('POST', 'https://v2.api.noroff.dev/auth/register' , postData);
    
    if (!response) {
        alert('Email already exists. Please try again.');
        return;
    }
    
    window.location.href = './login.html';
});
