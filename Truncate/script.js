function truncateString(str, num) {
  let truncatephrase = "";
  if (str.length > num) {
    for (let i = 0; i < num; i++) {
      truncatephrase += str.charAt(i);
      console.log(truncatephrase);
    }
    truncatephrase += "...";
    console.log(truncatephrase);
    return truncatephrase;
  } else {
    console.log(str);
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
