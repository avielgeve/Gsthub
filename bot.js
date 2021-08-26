require("module-alias/register");
const colors = require('colors'); 
const { Client, Intents } = require("discord.js");
const path = require("path");
const fs = require("fs");
const mongo = require("@database/mongo");
const ascii = require("ascii-table");
const { startupCheck } = require("@utils/botUtils");
const { BOT_TOKEN } = require("@root/config-sample");

global.__appRoot = path.resolve(__dirname);
const client = new Client({                                                               
  intents: [                                                               
    Intents.FLAGS.GUILDS,                                                               
    Intents.FLAGS.GUILD_MESSAGES,                                                               
    Intents.FLAGS.GUILD_INVITES,                                                               
    Intents.FLAGS.GUILD_MEMBERS,                                                               
    Intents.FLAGS.GUILD_PRESENCES,                                                               
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,                                                               
  ],                                                               
  partials: ["USER", "MESSAGE", "REACTION"],                                                               
});                                                               
                                                               
client.once("ready", async () => {                                                               
  const stringlength = 69;
  console.log("\n")
  console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + `Discord Bot is online!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "┃".bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃".bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
  console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)                                   
  await mongo();                                                               
  loadFeatures(client);                                                               
  client.user.setActivity("bot Devolop by Aviel :)");                                                               
});                                                               
                                                               
const loadFeatures = (client) => {
  let table = new ascii("Loading Features");
  table.setHeading("Feature", "Status");
  const readFeatures = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir));
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file));
      if (stat.isDirectory()) readFeatures(path.join(dir, file));
      else {
        const feature = require(path.join(__dirname, dir, file));
        try {
          feature.run(client);
          table.addRow(file, "\u2713");
        } catch (ex) {
          table.addRow(file, "\u2715");
          console.log(ex);
        }
      }
    }
  };
  readFeatures("src/features");
  console.log(table.toString());
};

// catch client errors and warnings
client.on("error", (error) => console.log("Client Error: " + error));
client.on("warn", (message) => console.log("Client Warning: " + message));

// find unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});

(async () => {
  await startupCheck();
  client.login(BOT_TOKEN);
})();
