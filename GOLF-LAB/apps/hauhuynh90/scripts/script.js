$(document).ready(function() { 
  console.log("doc is ready");
  
  $("#btnName").click(() => {
    const userName = $("#userName").val();

    $("#nameOutput").append(
      "The length of your name is: " + getStringLength(userName) + "<br/>"
    );
    $("#nameOutput").append(
      "Your Name reversed letters is: " + reverseString(userName) + "<br/>"
    );
    $("#nameOutput").append(
      "The first letter of your name is: " + firstLetter(userName) + "<br/>"
    );
    $("#nameOutput").append(
      "Your encrypted name is: " + encryptName(userName) + "<br/>"
    );
  });

  $("#btnClear").click(() => {
    clearElement("#nameOutput", "html");
    clearElement("#userName", "input");
  });

  const getStringLength = (stringVal) => stringVal.length;

  const reverseString = (stringVal) => stringVal.split("").reverse().join("");

  const firstLetter = (stringVal) => stringVal[0];

  const clearElement = (elementId, elementType) => {
    if (elementType == "html") {
      $(elementId).html("");
    } else if (elementType == "input") {
      $(elementId).val(" ");
    }
  };

  const encryptName = (stringVal) => {
    const newName = stringVal.split("").map((letter) => {
      if (letter === "a") return "@";
      if (letter === "e") return "3";
      if (letter === "o") return "0";
      return letter;
    });

    return newName.join("");
  };
});