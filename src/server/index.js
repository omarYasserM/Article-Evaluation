// TODO: Configure the environment variables
// TODO: delete meaning cloud package
const PORT = 8081;
const mockAPIResponse = require("./mockAPI.js");
const FormData = require("form-data");
var cors = require("cors");
var bodyParser = require("body-parser");
const express = require("express");
var path = require("path");
const dotenv = require("dotenv");
const app = express();
const fetch = require("node-fetch");

dotenv.config();

app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;

// a route that handling post request for new URL that coming from the frontend
app.post("/search-url", async (req, res) => {
  userUrl = req.body.url;
  const apiReq = `${baseURL}key=${apiKey}&url=${userUrl}&lang=en`;

  const response = await fetch(`${apiReq}`);
  const resData = await response.json();
  res.send(resData);
  /** server sends only specified data to the client with below codes
   * const resData = {
   *  score_tag : resData.score_tag,
   *  agreement : resData.agreement,
   *  subjectivity : resData.subjectivity,
   *  confidence : resData.confidence,
   *  irony : resData.irony
   * }
   * res.send(resData);
   * */
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});
