const scoreToPolarity = (score_tag) => {
  let result;
  switch (score_tag) {
    case "P":
      result = "positive";
      break;
    case "P+":
      result = "strong positive";
      break;
    case "N":
      result = "negative";
      break;
    case "NEU":
      result = "neutral";
      break;
    case "N+":
      result = "strong negative";
      break;
    case "NONE":
      result = "no sentiment";
  }
  return result.toUpperCase();
};
export { scoreToPolarity };
