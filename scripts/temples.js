// Toggle the mobile menu
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
navigation.classList.toggle('show');

  // Toggle the button icon between ☰ and X
if (menuButton.textContent === '☰') {
    menuButton.textContent = '✖';
} else {
    menuButton.textContent = '☰';
}
});

// Set the current year in the footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;
