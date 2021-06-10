const Discord = require("discord.js");
const config = require('dotenv').config()

const client = new Discord.Client();

// check to see what bot i am logged under 
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// Whenever a user types in test in chat it will respond with whatever is in msg.reply -- need to connect to a quote api 
client.on("message", msg => {
    if(msg.content.toLocaleLowerCase() === "test") {
        msg.reply("App is fixed");
    }
})

client.login(process.env.TOKEN) // pulled from the env file 