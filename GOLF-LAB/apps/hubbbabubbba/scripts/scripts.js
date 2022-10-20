$(document).ready(function(){ 
    console.log("document is ready");
  
  });
 
 
  $(document).ready(function () {
    

    $("#btnGetFacts").click(function () {
    
        let userName = $("#userName").val();
        let wowzFacts = generatewowzFacts(userName);
        
  
          $("#coolNameFactsOutput").html(wowzFacts);
    });
  });
  function generatewowzFacts(userName){
    let wowzFacts='';
  
  
    wowzFacts = nameLength(userName);
    wowzFacts += "<h2>" + nameStart(userName) + "</h2>";
    wowzFacts += "<h2>" + nameReverse(userName) + "</h2>";
    wowzFacts += "<h2>" + nameInfo(userName);
    wowzFacts += "<h2>" + bandRec(userName);
  
    return wowzFacts;
  }
  
  function nameLength(name){
    if (name.length = 0){
      return "Your name is kinda wowz"
    }
    else {
      return "Your name is " + name.length + " letters long";
    }
  }
  
  function nameStart(name){
    return "The First letter is " + name.charAt(0);
  }
  
  function nameReverse(name){
    return "Wowz, This is your name in esrever:" + "" + name.split("").reverse().join("");
  }
  
  function nameInfo(name){

    if (name.length <= 4){
      return "Your name is kinda wowz"
    }
    if (name.length >= 5){
      return "You get a lot of wowz for that kinda name"
    }
  }
  function bandRec(name){
    if (name.length <= 4){
        return "You should listen to Foo Fighters: This Is a Call"
      }
    if (name.length >= 5){
        return "You should listen to Bad Company: Bad Company"
    }
  }