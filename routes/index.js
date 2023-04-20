const router = require('express').Router();
const Discord = require("discord.js");
require('dotenv').config()
const client = new Discord.Client({intents: ["Guilds", "GuildMessages"]});

router.get("/", (req, res) => {
    res.send("Hello world!");
})

client.on("message", message => {
    if (message.content === "ping") {
        message.channel.send("pong!")
    }
})

client.login(process.env.token);


//export router for main server file
module.exports = router;