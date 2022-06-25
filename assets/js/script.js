var tasks = {};
// Get the current date and time
$(document).ready(function() {
    setInterval(() => {
        var currDay = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(currDay);
        }, 1000);
});

$(".container").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>")
    .addClass("form-control").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });
  
  // editable field was un-focused
  $(".container").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();
  
    // get status type and position in the list
    var status = $(this)
      .closest(".container")
      .attr("id")
      .replace("list-", "");
    var index = $(this)
      .closest(".container-item")
      .index();
  
    // update task in array and re-save to localstorage
    tasks[status][index].text = text;
    saveTasks();
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with new content
    $(this).replaceWith(taskP);
  });