const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedication: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37764-main.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedication: "1919-11-27",
    area: 47224,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-144-main.jpg"
  },
  {
    name: "Lima Peru Temple",
    location: "Lima, Peru",
    dedication: "1986-01-10",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-577-main.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedication: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-816-main.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedication: "2019-03-10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-15786-main.jpg"
  },
  {
    name: "Abidjan Ivory Coast Temple",
    location: "Abidjan, Ivory Coast",
    dedication: "2023-11-19",
    area: 8700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-38037-main.jpg"
  },
  {
    name: "Payson Utah Temple",
    location: "Payson, Utah",
    dedication: "2015-06-07",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-10877-main.jpg"
  },
  {
    name: "Kinshasa DR Congo Temple",
    location: "Kinshasa, DR Congo",
    dedication: "2019-04-14",
    area: 10500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-dr-congo-temple/kinshasa-dr-congo-temple-10748-main.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedication: "2005-08-07",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-1183-main.jpg"
  },
  {
    name: "Osaka Japan Temple",
    location: "Osaka, Japan",
    dedication: "1993-09-01",
    area: 18200,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/osaka-japan-temple/osaka-japan-temple-233-main.jpg"
  }
];

const grid = document.getElementById("temple-grid");
const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

// Menu toggle
menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Temple card renderer
function displayTemples(filteredTemples) {
  grid.innerHTML = "";
  filteredTemples.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedication}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.appendChild(img);
    card.appendChild(caption);
    grid.appendChild(card);
  });
}

// Filter functions
function filterTemples(filter) {
  let filtered;
  switch (filter) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedication).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedication).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// Initial display
displayTemples(temples);

// Filter button listeners
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    filterTemples(link.dataset.filter);
  });
});

// Footer details
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;