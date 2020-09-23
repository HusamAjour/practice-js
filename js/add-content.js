function greetings() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
  document.write('<h3>' + greeting + '</h3>');
}

greetings();
var view;
var modelView = function () {

  var model = prompt("What would you like to see? please type \"house\" to see a house and \"hotel\" to see a hotel");

  if (model == "hotel") {
    view = "<img src=\"images/hotel.png\">";
  } else if (model == "house") {
    view = "<img src=\"images/house.png\">";
  } else {
    view = "Something went wrong";
  }
  document.write('<p>' + view + '</p');
}
modelView();