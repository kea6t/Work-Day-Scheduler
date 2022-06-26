var tasks = {};
// Get the current date and time
$(document).ready(function() {
    // Shows the date and time while updating every second
    setInterval(function(){
        var currDay = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(currDay);
        }, 1000);
});


// textarea is fully visible
$("#text").on("click", function() {
    // highlight textarea
    $("#text").trigger("focus");
  });


$("#time-9").textContent = "9:00 AM";


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
