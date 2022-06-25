var tasks = {};
// Get the current date and time
$(document).ready(function() {
    setInterval(() => {
        var currDay = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(currDay);
        }, 1000);
});

