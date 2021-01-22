// Describe: beepBoop()
// Test: "It should return NaN if input is not a number"
// Expect(beepBoop("number").toEqual([NaN]));

// Test: "It should return an array with a 0 if the number 0 is inputted"
// Expect(beepBoop(0).toEqual([0]));

// Test: "It should return 'Beep!' for the number 1"
// Expect(beepBoop(1).toEqual("Beep!"));

// Test: "It should return 'Boop!' for the number 2"
// Expect(beepBoop(2).toEqual("Boop!"));

// Test: "It should return 'Won't you be my neighbor?' for the number 3"
// Expect(beepBoop(3).toEqual("Won't you be my neighbor?"));

// Test: "It should return 'Beep!' for any number that contains 1"
// Expect(beepBoop(17).toEqual("Beep!"));

// Test: "It should return 'Boop!' for any number that contains 2, overriding 1"
// Expect(beepBoop(102).toEqual("Boop!"));

// Test: "It should return 'Won't you be my neighbor?' for any  number that contains 3, overriding 1 and 2"
// Expect(beepBoop(123).toEqual("Won't you be my neighbor?"))

function beepBoop(number) {
  const roboArray = []
  if (Number.isInteger(number) === false ) {
    return "Please enter a whole number"
  } else {
    if (number.toString().includes(1)) {
      roboArray.push("Beep!");
    } else if (number === 2) {
      roboArray.push("Boop!");
    } else if (number === 3) {
      roboArray.push("Won't you be my neighbor?");
    } else {
      roboArray.push(number);
    }
  }
  
  return roboArray
}
console.log(beepBoop(21))