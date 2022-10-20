$(document).ready(function () {
  console.log("doc is ready");

  //let revName;

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();

    let userName = $("#userName").val();
    console.log("user name = ", userName);
    //let coolFacts = generateCoolNameFacts(userName);

    console.log("name length f/n = ", nameLength(userName));

    console.log("you clicked the button");

    // $("#coolNameFactsOutput").html(nameLength(userName));
    // $("#coolNameFactsOutput").html(getSpiritAnimal(userName));
     $("#coolNameFactsOutput").html(generateCoolNameFacts(userName));

  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = "<h3>" + "Hi " + userName + "!" + "</h3>";
  coolFacts += "<br" + nameLength(userName);
  coolFacts += " <br> " + getSpiritAnimal(userName);
  coolFacts += "<br>" + nameDegree(userName);



  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {

  return "Your name is " + name.length + " letters long!";

}

function getSpiritAnimal(name) {
  //flow control: case switch, loop, if/then

  if (name.length <= 3) {
    return "Your name is very short. You are a Bunny";
  } 
  else if (name.length == 4) {
    return "Your spirit animal is a dog";
  } 
  else if (name.length == 5) {
    return "Your spirit animal is a monkey";
  } 
  else if (name.length == 6) {
    return "Your spirit animal is a lion";
  } 
  else if (name.length == 7) {
    return "Your spirit animal is a goat";
  } 
  else if (name.length == 8) {
    return "Your spirit animal is a bird";
  } 
  else {
    return "Your name is very long. You are a giraffe";
  }
}

function nameDegree(name) {
  if (name.length <= 3) {
    return "You would major in Elementary Ed";
  } 
  else if (name.length <=6) {
    return "You would major in CIS";
  } 
  else if (name.length <=10){
    return "You would major in Accounting"
  }
  else {
    return "You would major in Marketing";
  }
}