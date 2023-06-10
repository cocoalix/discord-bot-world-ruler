import express from 'express'
import * as dotenv from "dotenv"

import discordMain from "../discordjs/main"


var port = 80

const app = express()

console.log("load env")
console.log("env: " + process.env.NODE_ENV)

if (process.env.NODE_ENV == "development") {
  console.log("dev")
  dotenv.config({ path: ".env.dev" });
  port = 3000
} else {
  console.log("prod")
  dotenv.config();
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

discordMain()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
