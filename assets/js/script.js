// Get the current date and time
var currDay = document.querySelector("#currentDay");

currDay.textContent = moment().format("dddd, MMM Do YYYY, h:mm a");