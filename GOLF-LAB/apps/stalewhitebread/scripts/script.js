$(document).ready(function(){
  //click on image, get message
  $("#dogeOne").click(function(){
    console.log("User clicked dogeOne")
  $("#outputDiv").toggle().fadeIn('slow');
  $("#outputMsg").text("Wow! Very Much Doge!");
  
  });
  $("#dogeTwo").click(function(){
    console.log("User clicked dogeTwo")
  $("#outputDiv2").toggle().fadeIn('slow');
  $("#outputMsg2").text("Loser! Loser! loser loser loser~")
  });
});