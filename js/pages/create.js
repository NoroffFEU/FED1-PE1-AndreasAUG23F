import { doFetch } from "../components/fetch.js";

let form = document.getElementById('blogForm')
form.addEventListener('submit',async (event) => {
    event.preventDefault()
    let formData = new FormData(form)
    let postData = {
        title: formData.get('title'),
        body: formData.get('text'),
        media: {
            url: formData.get('image'),
            alt: 'image'
        }

    }
    console.log('postData:', postData)
    await doFetch('POST','',postData)
})