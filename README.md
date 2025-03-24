# dashadriano
My portfolio website. Built with HTML, CSS, JavaScript, and Sass for CSS preprocessing. Compatible on desktop and mobile browsers. 

<em>Built by [@dashadriano](https://https://github.com/dashadriano)</em>

# Access
View website through the link under project description on the right-hand side of your screen. Alternatively, through direct access via any browser at [dashadriano.github.io](https://dashadriano.github.io).

# Development
As a basic website, the site utilizes the common web development stack of HTML, CSS, and JS; with the help of Sass for CSS-file-styling.

`script.js` works to maintain the various functions of the website's pages, mainly concerned with event-handling and the screen scrolling function for the scroll-up button.

SVGs used in the project, located in the `imgs` folder, were sourced from [Ikonate](https://ikonate.com).

For screen-size-specific design layouts to work, the window size would have to be observed. 

For this, the `index.html` file's `to-top-cta` div contained the code:

```bash
    <p>Current screen width: <span id="screen-width"></span></p>
    <p>Current screen height: <span id="screen-height"></span></p>
```
Additionally, the `script.js` file contained:

```bash
  function updateScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    document.getElementById('screen-width').textContent = width + 'px';
    document.getElementById('screen-height').textContent = height + 'px';
  }

  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
```

After configuration, the segments were removed.

# Description
The website is designed with a user-friendly interface that presents information clearly through the clean UI. It dynamically resizes, maintaining a user-friendly UI regardless of window size.

The website offers options to navigate the site's various sections through the navigation menu, and for smaller devices such as mobile phones, the navigation bar folds up neatly into a side menu, accessible through the hamburger menu icon on smaller screens.

Unfortunately, the contact form is not operational, as that would require a different site host since GitHub only hosts static sites. Looking into different hosting options. In the meantime, feel free to contact me via LinkedIn which is linked on my GitHub profile as well as on the site. 
