# _Mr. Robogers Neighborhood_

**A simple looping webpage**

#### By _Jeroen van Seeters_

## TECHNOLOGIES USED

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## Description

This is a simple webpage designed to demonstrate the abilty to loop with JavaScript. This page was created with the guidance of **EPICODUS**, the greatest coding bootcamp in the known universe, and google. You can visit the page [here.](https://jeroenemo.github.io/mr-robogers-neighborhood/)

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open _index.html_ in your browser

## Known Bugs
* The reverse button does not prompt user to enter number if the form fields are left blank. 
* The reverse button will use previous entries if the fields are left blank.

## Future Enhancements
* Fix aforementioned bugs concerning reverse button.
* Add styles to "Beep!", "Boop!", and "Won't you be my neighbor."

## License

MIT

Copyright (c) 2021 Jeroen van Seeters

## Contact Information

Jeroen van Seeters **vanseetersjeroen@gmail.com**

# _TESTS_

```
Describe: beepBoop();
Test: "It should return "Please enter a whole number" if input is not a number."
Expect(beepBoop("number").toEqual([NaN]));

Test: "It should return an array with a 0 if the number 0 is inputted."
Expect(beepBoop(0).toEqual([0]));

Test: "It should return 'Beep!' for the number 1."
Expect(beepBoop(1).toEqual("Beep!"));

Test: "It should return 'Boop!' for the number 2."
Expect(beepBoop(2).toEqual("Boop!"));

Test: "It should return 'Won't you be my neighbor?' for the number 3."
Expect(beepBoop(3).toEqual("Won't you be my neighbor?"));

Test: "It should return 'Beep!' for any number that contains 1."
Expect(beepBoop(17).toEqual("Beep!"));

Test: "It should return 'Boop!' for any number that contains 2, overriding 1."
Expect(beepBoop(102).toEqual("Boop!"));

Test: "It should return 'Won't you be my neighbor?' for any  number that contains 3, overriding 1 and 2."
Expect(beepBoop(123).toEqual("Won't you be my neighbor?"))

Test: "It should iterate over range of 0 to input and push results to array."
Expect(beepBoop(5).toEqual([0,"Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]))
```