function repeatStringNumTimes(str, num) {
  let empty = "";
  let repeated = "";
  if (num < 0) {
    console.log(empty);
    return empty;
  } else {
    for (let i = num; i > 0; i--) {
      repeated += str;
    }
    console.log(repeated);
    return repeated;
  }
}

repeatStringNumTimes("abc", 3);
