

//making a new string by adding d three first letter + the three last letters.

let MakeNewString = (letter) =>
    letter.length < 3 ? letter : letter.slice(0,3) + letter.slice(-3);

console.log(MakeNewString("lan"));
console.log (MakeNewString("lambogini"));
console.log( MakeNewString("hi"));

