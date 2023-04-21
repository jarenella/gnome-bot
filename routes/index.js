const router = require('express').Router();
const Discord = require("discord.js");
require('dotenv').config()
const Helpers = require("../helpers/Helpers");

const client = new Discord.Client(
  {
    intents: [
      Discord.GatewayIntentBits.Guilds,
      Discord.GatewayIntentBits.GuildMessages,
      Discord.GatewayIntentBits.MessageContent,
    ]
  }
)

router.get("/", (req, res) => {
  res.send("Welcome to GnomeBot!");
})

client.login(process.env.token);

client.on("ready", () => {
  console.log("Bot online and logged in");
})

client.on("messageCreate", message => {
  console.log("Received message: " + message.content);

  if (Helpers.matchesRegex(message)) {
    const splitStrng = message.content.split(" ");
    const num = splitStrng[1]; //splitStrng is an array
    message.channel.send("your number is " + num);
  }
})


//export router for main server file
module.exports = router;