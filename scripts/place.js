"use strict";
// place.js - JavaScript for W03 Country Page

// Set current year and last modified date
const currentYear = new Date().getFullYear();
const yearElem = document.getElementById("year");
if (yearElem) yearElem.textContent = currentYear;

const lastModifiedElem = document.getElementById("lastModified");
if (lastModifiedElem) lastModifiedElem.textContent = document.lastModified;

// Windchill Calculation
function calculateWindChill(t, s) {
  return (t <= 10 && s > 4.8)
    ? Math.round(
        13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)
      )
    : "N/A";
}

document.addEventListener("DOMContentLoaded", () => {
  const temp = 30; // Replace with actual temp if dynamic
  const wind = 12; // Replace with actual wind if dynamic
  let windChill = "N/A";
  if (temp <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temp, wind) + "°C";
  }
  const weatherList = document.querySelector(".weather-card ul");
  if (weatherList) {
    weatherList.innerHTML += `<li>Wind Chill: ${windChill}</li>`;
  }

  // Footer year and last modified
  const yearElemFooter = document.getElementById("year");
  if (yearElemFooter) yearElemFooter.textContent = new Date().getFullYear();
  const lastModifiedElemFooter = document.getElementById("lastModified");
  if (lastModifiedElemFooter) lastModifiedElemFooter.textContent = document.lastModified;
});
