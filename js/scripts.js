function beepBoop(number) {
  const roboArray = []
  if (Number.isInteger(number) === false ) {
    return "Please enter a whole number"
  } else {
    for(let i = 0; i <= number; i++) {
      if (i.toString().includes(3)) {
        roboArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes(2)) {
        roboArray.push("Boop!");
      } else if (i.toString().includes(1)) {
        roboArray.push("Beep!");
      } else {
        roboArray.push(i);
      }
    }
  }
  return roboArray
}
console.log(beepBoop(5))