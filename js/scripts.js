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
          name = name.charAt(0).toUpperCase() + name.slice(1, name.length)
          roboArray.push(" " + name + ", won't you be my neighbor? ");
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

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#number").val());
    const name = ($("#name").val());
    $("#output").text(beepBoop(number, name))
  });
}); 

