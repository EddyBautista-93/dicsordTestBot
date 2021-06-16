const Discord = require("discord.js");
const fetch = require("node-fetch")
const config = require('dotenv').config()

const client = new Discord.Client();


// call to the zen api for quotes and return the quote from json 
const getQuote = () => {
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
        return res.json() // sends a json response 
    })
    .then(data => {
        return data[0]["q"] + " -" + data[0]["a"] // grab the quote and author and format it for the discord mssg
    })
}

// check to see what bot i am logged under 
client.on("ready", () => {
    console.log(`I am bot :  ${client.user.tag}!`)
})

// Whenever a user types in test in chat it will respond with whatever is in msg.reply -- need to connect to a quote api 
client.on("message", msg => {
   if (msg.author.bot) return
   if (msg.content.toLocaleLowerCase() === "$inspire") {
       getQuote().then(quote => msg.channel.send(quote))
   }
})

client.login(process.env.TOKEN) // pulled from the env file 