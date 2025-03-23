document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.getElementById('mobile-menu-cta');
  const nav = document.querySelector('nav');
  const mobileExitBtn = document.getElementById('mobile-exit');
  const form = document.getElementById('contact');
  
  console.log(mobileBtn, nav, mobileExitBtn);

  if (!mobileBtn || !nav || !mobileExitBtn) {
    console.error('One or more elements not found');
    return;
  }

  mobileBtn.addEventListener('click', () => {
    console.log('Mobile menu button clicked');
    nav.classList.add('expand-menu');
  });

  mobileExitBtn.addEventListener('click', () => {
    console.log('Mobile exit button clicked');
    nav.classList.remove('expand-menu');
  });
  
  if(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Form submitted');
      form.reset();
    });
  }
});

const scrollUpBtn = document.getElementById('scroll-up');
if(scrollUpBtn) {
  document.getElementById('scroll-up').addEventListener('click', function() {
    const scrollDuration = 500; 
    const scrollHeight = window.scrollY; 
    const startTime = performance.now(); 
    
    function scrollStep(timestamp) {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1); 
      
      window.scrollTo(0, scrollHeight * (1 - progress));
      
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }
    
    requestAnimationFrame(scrollStep); 
  });
}
