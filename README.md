# Evaluate A News Article with Natural Language Processing

Last technical Project at the course "Advanced Front End Web Developer Nanodegree program."

The project takes an Article or a blog URL and evaluate it using MeaningCloud API(Sentiment Analysis), which returns sentiments of this Artcle

## Build Tools

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- meaningcloud API
- Jest
- Workbox

## Installation

1. install the packages

```
npm i
```

2. Sign up to get an API key from meaningCloud [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

3. Configure environment variables using dotenv package
   1. make sure you have dotenv
   ```
   npm install dotenv
   ```
   2. Create a new `.env` file in the root of your project and fill it with API key like this
   ```
   API_KEY=**************************
   ```
4. Start the project

|       Command        |    Action     |
| :------------------: | :-----------: |
| `npm run build-prod` | Build project |
|     `npm start`      |  Run project  |

5. Open browser at http://localhost:8081/
