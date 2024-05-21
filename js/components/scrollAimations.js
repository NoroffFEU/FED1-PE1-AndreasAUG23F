

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      handleIntroAnimation();
      handleBlogAnimation();
    });
  });
  
  function handleIntroAnimation() {
    const introSection = document.querySelector('.intro');
    const introPosition = introSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    if (introPosition < screenPosition) {
      introSection.classList.add('show');
    }
}
  
  function handleBlogAnimation() {
    const blogSection = document.querySelector('.blog-section');
    const blogPosition = blogSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    if (blogPosition < screenPosition) {
        blogSection.classList.add('show');
    }
}