import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as dotenv from "dotenv"

import discordMain from "../discordjs/main"

var port = 80

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

discordMain()

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  try {
    context.res = { body: "Success!" };
  } catch (error) {
    const err = JSON.stringify(error);
    context.res = {
      status: 500,
      body: `Request error. ${err}`,
    };
  }
};

export default httpTrigger;
