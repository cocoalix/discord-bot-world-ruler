//必要なパッケージをインポートする
import { GatewayIntentBits, Client, Partials, Message } from 'discord.js'
// import * as dotenv from "dotenv-yaml"
//import * as dotenv from "dotenv"

export default function discordMain() {
//  //.envファイルを読み込む
//  console.log("load env")
//  console.log("env: " + process.env.NODE_ENV)
//
//  if (process.env.NODE_ENV == "development") {
//    console.log("dev")
//    dotenv.config({ path: ".env.dev" });
//  } else {
//    console.log("prod")
//    dotenv.config();
//  }

  //Botで使うGetwayIntents、partials
  const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
  })

  //Botがきちんと起動したか確認
  client.once('ready', () => {
    console.log('Ready!')
    if(client.user){
      console.log(client.user.tag)
    }
  })

  //!timeと入力すると現在時刻を返信するように
  client.on('messageCreate', (message: Message) => {
    if (message.author.bot) return
      if (message.content === '!time') {
        const date1 = new Date();
        message.channel.send(date1.toLocaleString());
      }
  })

  //ボット作成時のトークンでDiscordと接続
  client.login(process.env.DISCORD_BOT_CLIENT_TOKEN)
}
