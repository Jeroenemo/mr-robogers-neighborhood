Describe: beepBoop()
Test: "It should return NaN if input is not a number"
Expect(beepBoop("number").toEqual([NaN]));

Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]));

Test: "It should return 'Beep!' for the number 1"
Expect(beepBoop(1).toEqual("Beep!"));

Test: "It should return 'Boop!' for the number 2"
Expect(beepBoop(2).toEqual("Boop!"));

Test: "It should return 'Won't you be my neighbor?' for the number 3"
Expect(beepBoop(3).toEqual("Won't you be my neighbor?"));

Test: "It should return 'Beep!' for any number that contains 1 first, left to right"
Expect(beepBoop(132).toEqual("Beep!"));

Test: "It should return 'Boop!' for any number that contains 2 first, left to right"
Expect(beepBoop(213).toEqual("Boop!"));

Test: "It should return 'Won't you be my neighbor?' for any  number that contains 3 first, left to right"
Expect(beepBoop(321).toEqual("Won't you be my neighbor?"));
