function rot13(str) {
  const alphabet = [
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ];
  let phrase = str.toUpperCase().replace(/[\W_]/g, "").split("");
  // console.log(phrase);
  let result = "";

  for (let i = 0; i < phrase.length; i++) {
    console.log(i);
    for (let j = 13; j <= alphabet.length; j++) {
      if (phrase[i] == alphabet[j]) {
        result += alphabet[j - 13];
      }
    }
  }
  console.log(result);
}

// rot13("SFRR PBQR PNZC");
rot13("XYZABCDEF");
// rot13("ABCDEFGHIJKLMNOPQRSTUVWYZ");
