$(function() {
  console.log("document is ready!");

  var userName, nameLength, nameMsg, nameReverse = ""; 

  $('#btnName').click(function() {
      userName = $('#userName').val(); 

      nameLength = getStringLength(userName);
      nameMsg = "Your name length is: ";
      $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

      nameReverse = reverseString(userName);
      nameMsg = "Your name in reverse is: ";
      $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 
 
      stringArrayPosition(userName); 
      animalSpirit = spiritAnimal(userName);
      nameMsg = "Your spirit animal is: ";
      $('#nameOutput').append(nameMsg + animalSpirit + "<br/>");

      });

      $('#btnClear').click(function(){
          clearElement("#nameOutput", "html");
          clearElement("#userName", "input");
    })

  function getStringLength(stringVal){
      var stringLength = stringVal.length; 
     return stringLength; 
  }

  function reverseString(stringVal){
      var revString = stringVal.split("").reverse().join("");
     return revString; 

  }

  function clearElement(elementId, elementType){
      if(elementType == "html"){
          $(elementId).html(""); 
      }
      else if(elementType=="input"){
          $(elementId).val(" "); 
      }
    
      
  } 

  function stringArrayPosition(stringVal){

      for(i=0; i<stringVal.length; i++){
          console.log(i + " " + stringVal[i]);
      }


  }
function spiritAnimal(userName) {
  if (userName.length < 4) {
    return "Monkey";
  } else if (userName.length <= 8) {
    return "Lion";
  } else if (userName.length <= 12) {
    return "Bear"
  } else {
    return "fish";
  }
}



});