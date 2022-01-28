const post = async (url = "", data = {}) => {
  const mydata = await fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then(function (data) {
      return data;
    });
  return mydata;
};

function handleSubmit(event) {
  event.preventDefault();
  const url = document.getElementById("article-url").value;
  document.getElementById("text").innerHTML = `Text: Discovering...`;
  if (client.isUrl(url)) {
    post("http://localhost:8081/search-url", { url }).then((data) => {
      document.getElementById("text").innerHTML = `Text: ${url}`;
      document.getElementById("polarity").innerHTML =
        "Polarity: " + client.scoreToPolarity(data.score_tag);
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${data.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity: ${data.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${data.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    });
  } else {
    alert("Enter a valid URL");
  }
}

export { handleSubmit };
