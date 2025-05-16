// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Responsive menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
});
