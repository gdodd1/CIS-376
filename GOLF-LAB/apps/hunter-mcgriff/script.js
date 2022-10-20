$( document ).ready(function() {
  console.log( "ready!" );
///click on image get, get a message

$("#dogeOne").click(function(){
  $("#outputDiv").hide();
  console.log('user clicked dogeOne');
  $("#outputMsg").text("You lose");
  $("#outputDiv").toggle();
});

  $("#dogeTwo").click(function(){
    $("#outputDiv").hide();
  console.log('user clicked dogeTwo');
    $("#outputMsg").text("You has WOW");
  $("#outputDiv").toggle();
});

});