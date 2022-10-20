$(document).ready(function () {
  console.log("doc is ready");

  //let revName;

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    // handle it if input is blank

    let userName = $("#userName").val();
    console.log("user name = ", userName);
    //let coolFacts = generateCoolNameFacts(userName);

    console.log("name length f/n = ", nameLength(userName));

    console.log("you clicked the button");
    //console.log("from ln 12", generateCoolNameFacts(userName));

    $("#coolNameFactsOutput").html(generateCoolNameFacts(userName));
  });

 $("#monthDiv button").click(function () {
        let userMonth = $(this).attr("value");
   
        alert(getSpiritAnimal(userMonth));
      });
 
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += " <br> " + nameEnd(userName);
  coolFacts += " <br> " + reverseName(userName);

  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {
  //named, not anonymous. Name = nameLength
  //parameters, one = j
  //void if it has no return value

  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "The first letter of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;

  return "The last letter of your name is " + name[lastIndex];
}

function reverseName(name) {
  // let arrSomeArray = [1, "cat", "Susan", [j, "stuff"]];

  let arrName = name.split();

  revName = arrName.reverse();
  return "Your name reversed is: " + revName;
}

function getSpiritAnimal(userMonth) {
  
  //flow control: case switch, loop, if/the
  let spiritAnimal = "nothing";

  switch(userMonth){
    case "Jan":
      spiritAnimal = "Dire Wolf";
      break;
    
    case "Feb":
      spiritAnimal = "Polar Bear";
      break;
    
    case "Mar":
      spiritAnimal = "Lion";
      break;
    
    case "Apr":
      spiritAnimal = "Gorilla";
      break;
      
    case "May":
      spiritAnimal = "Golden Retriever";
      break;

    case "Jun":
      spiritAnimal = "King Cobra";
      break;

    case "Jul":
      spiritAnimal = "Water Buffalo";
      break;
      
    case "Aug":
      spiritAnimal = "Crocodile";
      break;
      
    case "Sep":
      spiritAnimal = "Mongoose";
      break;
      
    case "Oct":
      spiritAnimal = "Ferret";
      break;
        
    case "Nov":
      spiritAnimal = "Leopard";
      break;
  
    case "Dec":
      spiritAnimal = "Falcon";
  }
  return spiritAnimal;
}