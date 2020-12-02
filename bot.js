require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";
// /////////
client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});
// ///////////////
client.on("guildMemberAdd", (msg) => {
  msg.channel.send("why did you add her");
});
client.on("ready", () => {
  console.log("Our bot is ready to go");
});
////////////
client.on("message", (msg) => {
  if (msg.content == "i love web development") {
    msg.react("❤️");
  }
  /////////
  if (msg.content === "hey") {
    msg.reply("bye!");
  }
  ///////
  if (msg.content === "how are you") {
    msg.reply("Mind your own buisness!");
  }
  /////
  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});
/////////
function modUser(member) {
  member.roles.add("783751972187668541");
}
/////////
client.login(process.env.BOT_TOKEN);
