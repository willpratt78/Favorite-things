$(document).ready(function() {
  $("form#favorites").submit(function)(event) {
  event.preventDefault();
  
  var things = $('#things').val();
  var food = $("#food").val();
  var animals = $("#animals").val();
  var color = $("#color").val();
  
  var favorites = [things, food, animals, color];

  $('#output').text(result);

  }
}

// Put a submit method inside the doc.ready method
// Use jquery to gather data from DOM
// console.log() to make sure we get these values correclty
// remove hashtags from array
// put event.preventDefault() at the top of the submit method