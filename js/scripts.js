function beepBoop(number, name) {
  const roboArray = []
  if (Number.isInteger(number) === false ) {
    return "Please enter a whole number"
  } else {
    for(let i = 0; i <= number; i++) {
      if (i.toString().includes(3)) {
        if (name === "") {
          roboArray.push(" Won't you be my neighbor?");
        } else {
          roboArray.push(" " + titleCase(name) + ", won't you be my neighbor? ");
        }
      } else if (i.toString().includes(2)) {
        roboArray.push(" Boop!");
      } else if (i.toString().includes(1)) {
        roboArray.push(" Beep!");
      } else {
        roboArray.push(i);
      }
    }
  }
  return roboArray
}
function titleCase(string) {
  let splitString = string.split(" ");
  for(let i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
  }
  return splitString.join(" ")
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#number").val());
    const name = ($("#name").val());
    $("#output").text(beepBoop(number, name));
    $("#reverse").text(beepBoop(number, name).reverse());
  });
  $(":button").click(function() { 
    if (this.id === "input-button") {
      $("#input-form").hide();
      $("#output-form").show();
    } else if (this.id ===  "output-button") {
      $("#input-form").hide();
      $("#output-form").show();
    } else if (this.id === "reverse-button") {
      $("#input-form").hide();
      $("#reverse-form").show();
    }
  });
}); 



