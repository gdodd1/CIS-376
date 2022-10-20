//we are in jQuery land when we see: $
//invoke the elements in our HTML page
//take a loosky in "vanilla" JS
//for example, to get the value of our First Name
let el = document.getElementById("fname");
console.log("el is =:", el);
//jQ is CSS-friendly

$(document).ready(function () {
  $("#sendName").click(function () {
    //console.log($("#fname").val());
    $("#greetingOutput").text("Hello " + $("#fname").val() + " :)  Welcome to my webpage!"); 
  });
});
