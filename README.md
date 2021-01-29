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

This is a simple webpage designed to demonstrate the abilty to loop with JavaScript. The user is prompted to input a name and number, and the program will iterate over a range from 0 to the inputted number. Furthermore the program will amend all occurences of the numbers 1, 2 and 3. This page was created with the guidance of **EPICODUS**, the greatest coding bootcamp in the known universe, and google. You can visit the page [here.](https://jeroenemo.github.io/mr-robogers-neighborhood/)

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open _index.html_ in your browser.

## Known Bugs
* The reverse button does not prompt user to enter number if the form fields are left blank. _(fixed)_
* The reverse button will use previous entries if the fields are left blank. _(fixed)_
* Would be nice to not reverse "Enter a whole number" and "won't you be my neighbor."
* Does not render well on smaller viewports.


## Future Enhancements
* Add CSS to address rendering issues with different viewports.
* Add styles to "Beep!", "Boop!", and "Won't you be my neighbor."

## License

MIT

Copyright (c) 2021 Jeroen van Seeters

## Contact Information

Jeroen van Seeters **vanseetersjeroen@gmail.com**

# _TESTS_

```
Describe: beepBoop();
Test: "It should return "Please enter a whole number" if input a string."
Expect(beepBoop("a").toEqual(Please enter a whole number));

Test: "It should return "Please enter a whole number" if input is a float."
Expect(beepBoop(1.5).toEqual(Please enter a whole number));

Test: "It should return "Please enter a whole number" if input is a negative number."
Expect(beepBoop(-5).toEqual(Please enter a whole number));

Test: "It should return an array with a 0 if the number 0 is inputted."
Expect(beepBoop(0).toEqual([0]));

Test: "It should return 'Beep!' for the number 1."
Expect(beepBoop(1).toEqual([0, "Beep!"]));

Test: "It should return 'Boop!' for the number 2."
Expect(beepBoop(2).toEqual([0, "Beep!", "Boop!"]));

Test: "It should return 'Won't you be my neighbor?' for the number 3."
Expect(beepBoop(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]));

Test: "It should return 'Beep!' for any number that contains 1."
Expect(beepBoop(11).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]));

Test: "It should return 'Boop!' for any number that contains 2, overriding 1."
Expect(beepBoop(12).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"])

Test: "It should return 'Won't you be my neighbor?' for any  number that contains 3, overriding 1 and 2."
Expect(beepBoop(123).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", 40, "Beep!", "Boop!", "Won't you be my neighbor?", 44, 45, 46, 47, 48, 49, 50, "Beep!", "Boop!", "Won't you be my neighbor?", 54, 55, 56, 57, 58, 59, 60, "Beep!", "Boop!", "Won't you be my neighbor?", 64, 65, 66, 67, 68, 69, 70, "Beep!", "Boop!", "Won't you be my neighbor?", 74, 75, 76, 77, 78, 79, 80, "Beep!", "Boop!", "Won't you be my neighbor?", 84, 85, 86, 87, 88, 89, 90, "Beep!", "Boop!", "Won't you be my neighbor?", 94, 95, 96, 97, 98, 99, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]))
```