module.exports = {
  BOT_TOKEN: "ODc3MzQwMDkxMzk4MzYxMTc5.YRxMoQ.__K8wqondZJI9kQmXRhdU7kBIzM", // Your discord bot token
  MONGO_CONNECTION: "mongodb+srv://MyAviel:aviel998898@cluster0.nt6fh.mongodb.net/test", // URI of the mongo database
  JOIN_LEAVE_WEBHOOK: "https://discord.com/api/webhooks/880261975312052274/AnltQQambThCJujFhpcVMlpDBQG4iWgdNnD8PHI78KXMtX9viUAKV33BNV16A4n6qOoT", // Webhook to which guild join/leave details will be sent
  OWNER_IDS: ["780308062849597441"], // Bot owner ID's
  PREFIX: "!", // Default prefix for the bot
  BOT_INVITE: "https://discord.com/api/oauth2/authorize?client_id=877340091398361179&permissions=8&scope=bot", // Your bot invite link
  SUPPORT_SERVER: "https://discord.gg/UmSXrAYm", // Your bot support server
  XP_SYSTEM: {
    COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{m}, You just advanced to **Level {l}**",
  },
  API: {
    IMAGE_API: "https://discord-js-image-manipulation.herokuapp.com", // Image commands won't work without this
    WEATHERSTACK_KEY: "6ce6edd9fa4557616b8a24fb2bf1609a", // https://weatherstack.com/
  },
  /* Bot Embed Colors */
  EMBED_COLORS: {
    BOT_EMBED: "0x068ADD",
    TRANSPARENT_EMBED: "0x36393F",
    SUCCESS_EMBED: "0x00A56A",
    ERROR_EMBED: "0xD61A3C",
    WARNING_EMBED: "0xF7E919",
  },
  /* Unicode Emojis Used */
  EMOJIS: {
    ARROW: "❯",
    ARROW_BULLET: "»",
    CIRCLE_BULLET: "•",
    CUBE_BULLET: "❒",
    WHITE_DIAMOND_SUIT: "♢",
    TICK: "✓",
    X_MARK: "✕",
    CURRENCY: "₪",
    TICKET_OPEN: "🎫",
    TICKET_CLOSE: "🔒",
  },
  /* Maximum number of keys that can be stored */
  CACHE_SIZE: {
    GUILDS: 10,
    USERS: 1000,
    COUNTER: 10,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },
};
