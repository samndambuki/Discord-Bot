require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  //intents - permissions bot should use to get access to events
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
  console.log("The bot is ready");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  // console.log(message)
  // console.log(message.content)
  if (message.content === "hello") {
    message.reply("hello");
  }
});

//token - is the bot password
client.login(process.env.TOKEN);
