const { channel } = require('diagnostics_channel');
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", 'DIRECT_MESSAGES', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_VOICE_STATES']}, {partials: ["MESSAGE", "CHANNEL", "REACTION"] })
const prefix = '-';

const { joinVoiceChannel } = require('@discordjs/voice');

var fs = require('fs');

// let me know when the bot is turned on
client.once('ready', () => {
    console.log('Music Bot is Online!');
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async message => {
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if(message.content.startsWith = prefix + 'p') {
    const { createReadStream } = require('fs');
    const { join } = require('path');
    const { createAudioResource, StreamType, createAudioPlayer, joinVoiceChannel } = require('@discordjs/voice'); 
    const player = createAudioPlayer()

    joinVoiceChannel({
    channelId: message.member.voice.channel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator
    }).subscribe(player)
 
  let resource = createAudioResource(join('C:/Users/brenn/Desktop/wiishop.mp3'));

  player.play(resource)
  }
});

client.login: HAHA