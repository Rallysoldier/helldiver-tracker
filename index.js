// Load environment variables
require('dotenv').config();

// Import required modules
const { SapphireClient } = require('@sapphire/framework');
const { GatewayIntentBits } = require('discord.js');

// Initialize the bot client
const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences
  ]
});

// Log in to Discord
client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log('Bot logged in successfully.'))
  .catch(console.error);
