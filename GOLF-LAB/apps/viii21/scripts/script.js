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
  
  //$("#coolNameFactsOutput").html(nameLength(userName));
  $("#coolNameFactsOutput").html(getSpiritAnimal(userName));
  
  });
  });
  
  function generateCoolNameFacts(userName) {
  let coolFacts = "";
  
  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>";
  
  console.log("initialized the'm coolFacts variable: " + coolFacts);
  
  return coolFacts;
  }
  
  function nameLength(name) {
  
  
  return "Your name is " + name.length + " letters long!";
  }
  
  function nameStart(name) {
  return "the first letter of your name is " + name[0];
  }
  
  function nameEnd(name) {
  let lastIndex = name.length - 1;
  
  return "the last letter of your name is " + name[lastIndex];
  }
  
  function reverseName(name) {
  // let arrSomeArray = [1, "cat", "Susan", [j, "stuff"]];
  
  let arrName = name.split();
  
  revName = arrName.reverse();
  }
  
  function getSpiritAnimal(x) {
  //flow control: case switch, loop, if/then
  
  if (x.length == 6) {
  //execute some code
  return "cutest!";
  } else if (x.length > 10) {
  return "perfect";
  } else {
  return "best.";
  }
  }
  
  const clearElement = (elementId, elementType) => {
  if (elementType == "html") {
  $(elementId).html("");
  } else if (elementType == "input") {
  $(elementId).val(" ");
  }
  };
  
  
  $("#btnClear").click(() => {
  clearElement("#nameOutput", "html");
  clearElement("#userName", "input");
  });
