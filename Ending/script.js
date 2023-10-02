function confirmEnding(str, target) {
  let ending = "";
  if (target.length != 1) {
    for (let i = target.length; i >= 1; i--) {
      ending += str.charAt(str.length - i);
    }
    if (target == ending) {
      console.log("True");
      return true;
    } else {
      console.log("False");
      return false;
    }
  } else {
    if (str.charAt(str.length - 1) == target) {
      console.log("True");
      return true;
    } else {
      console.log("False");
      return false;
    }
  }
}

confirmEnding("Laura corre", "rre");
