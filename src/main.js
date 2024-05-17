window.location.replace("https://tamim-ahmmad.web.app");

function route(path) {
  if (path === '/' || path === '/index.html') {
    loadPage('index.html');
  } else {
    loadPage('404.html');
  }
}

function loadPage(page) {
  fetch(page)
    .then(response => {
      document.querySelector("body").style.display = "block";
    })
    .catch(error => {
      document.querySelector("body").style.display = "none";
    });
}
