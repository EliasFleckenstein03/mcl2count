const https = require("https")
const Discord = require("discord.js")

const url = "https://content.minetest.net/api/packages/Wuzzy/mineclone2/"
const channelID = "831215776446676994"

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })

const update = chan => fetch(url)
	.then(res => res.json())
	.then(data => chan.setName(`🔽 ${data.downloads} Downloads`))

client.on("ready", _ => client.channels.fetch(channelID)
	.then(update)
	.then(chan => setInterval(update, 5 * 60 * 1000, chan)))

client.login(process.env.DISCORD_TOKEN)
