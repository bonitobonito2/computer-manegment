function nameValidation(inputText) {
  var text = inputText.replace(/\s/g);
  const georgian = /[\u10A0-\u10FF]/;
  let language = "";

  for (var i = 0; i < text.length; i++) {
    if (georgian.test(text[i]) == true) {
      language = "Georgian";
      continue;
    }
    language = "err";
    break;
  }

  if (language === "Georgian") {
    if (text.length > 1) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

export default nameValidation;
