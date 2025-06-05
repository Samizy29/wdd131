// place.js - JavaScript for W03 Country Page

// Set current year and last modified date
const currentYear = new Date().getFullYear();
const yearElem = document.getElementById("year");
if (yearElem) yearElem.textContent = currentYear;

const lastModifiedElem = document.getElementById("lastModified");
if (lastModifiedElem) lastModifiedElem.textContent = document.lastModified;

// Windchill Calculation
const temp = 35; // static temperature in °F
const windSpeed = 10; // static wind speed in mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

const windchillElem = document.getElementById("windchill");
if (windchillElem) {
  if (temp <= 50 && windSpeed > 3) {
    windchillElem.textContent = `${calculateWindChill(temp, windSpeed)} °F`;
  } else {
    windchillElem.textContent = "N/A";
  }
}
