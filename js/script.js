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

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const nav = document.querySelector('nav');
  
  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      if (nav.classList.contains("expand-menu")) {
        nav.classList.remove("expand-menu");
      }
    });
  });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));