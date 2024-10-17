const { Telegraf } = require("telegraf");
const TOKEN = "7398024653:AAF-v6EhrnwhWpgYxPgd1Iy7SoGact75rOM";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
