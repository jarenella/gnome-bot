const router = require('express').Router();
//Client GatewayIntentBits
const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config()
const Helpers = require("../helpers/Helpers");

const client = new Client(
  {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ]
  }
)

router.get("/", (req, res) => {
  res.send("Welcome to GnomeBot, a simple Discord bot!");
})

client.login(process.env.token);

client.on("ready", () => {
  console.log("Bot online and logged in");
})

//commands VVVVVVV
client.on("messageCreate", message => {
  console.log("Received message: " + message.content);

  if (Helpers.matchesRegex(message)) { //if message matches the "!rtd number" regex format
    const splitStrng = message.content.split(" ");
    const num = splitStrng[1]; //splitStrng is an array
    if (num > 500 || num == 0) {
      return;
    }
    const rngNum = Math.floor(Math.random() * num) + 1 //number generated can be from 0-99 (100 options)
    message.channel.send("" + rngNum);
  }

  if (message.content === "!biden") {
    message.channel.send("BLAST!");
  }

  if (message.content === "!commands") {
    message.channel.send("!biden\n!rtd num\n!obamna");
  }

  if (message.content === "!obamna") {
    message.channel.send("SODA !!");
  }
})


//export router for main server file
module.exports = router;