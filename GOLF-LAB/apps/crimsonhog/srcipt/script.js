$(document).ready(function () {
    
  $("#dogeOne").click(function(){
    console.log("user clicked dogeOne");
    $("#outputDiv").toggle();
    $("#outputMsg").text("You ate pringles. Delicious");
  });
  $("#dogeTwo").click(function(){
    console.log("user clicked dogeTwo");
        $("#outputDiv").toggle();
    $("#outputMsg").text("wow, so fast, very cool");
  });
});
