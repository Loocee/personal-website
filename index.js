document.addEventListener('DOMContentLoaded', ()=> {
// Function to update the current day dynamically
function getCurrentDay() {
    // Array of weekday names
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Creates a new Date object
    var currentDate = new Date();
    // Gets the current day of the week and returns a value btw 0-6
    var dayOfWeek = currentDate.getDay();
    // Gets the name of the current day
    var currentDayOfWeek = days[dayOfWeek];
    // Sets the current day as the inner text of the HTML element
    document.getElementById("currentDay").innerText = currentDayOfWeek;
  }
  // Calls the function on page load
  getCurrentDay();
  // Calls the function every minute to update the day dynamically
  setInterval(getCurrentDay, 60000);

// Function to update the current time in UTC
function getTime() {
    // Creates a new Date object and get the UTC time
    var currentTime = new Date();
    var hours = currentTime.getUTCHours();
    var minutes = currentTime.getUTCMinutes();

    minutes = minutes.toString().padStart(2, '0');
  
    // Formats the time as HH:MM
    var time = hours + ":" + minutes;
  
    // Sets the formatted time as the inner text of the HTML element
    document.getElementById("currentTimeUTC").innerText = time
  }
  
  // Calls the updateUTCTime function every second to update the time
  setInterval(getTime, 1000);
});