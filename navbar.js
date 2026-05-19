document.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname;
    let navbarPath = "/navbar.html";
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
});