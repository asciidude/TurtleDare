import dotenv from 'dotenv';
dotenv.config();

import { Client, Collection, Intents } from 'discord.js';

const client = new Client({
	intents:
	[
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGES
	]
});

client.commands = new Collection();

import { readdirSync, lstatSync } from 'fs';

const loadCommands = (collection, directory) => {
    for (const file of readdirSync(directory)) {
        if(file.endsWith('.mjs')) {
            import(`${directory}/${file}`).then(command => {
				client.commands.set(command.default.name, command.default);
				console.log(`${command.default.name} command has loaded`)
			});
        } else if(lstatSync(`${directory}/${file}`).isDirectory()) {
            loadCommands(collection, `${directory}/${file}`);
        }
    }
}

loadCommands(client.commands, './commands');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	setInterval(() => {
		const statusArray = ['for rule-breakers, WATCHING', '$help, LISTENING', 'painfully hard games, PLAYING', 'for a sign to live, LISTENING', 'my mistakes, LISTENING']
		const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ');

		client.user.setPresence({
			activities: [{
				name: random[0],
				type: random[1]
			}],
			status: 'dnd'
		});
	}, 5000);
});

client.on('messageCreate', message => {
	if(!message.content.startsWith(process.env.PREFIX) || message.author.bot || message.guild === null) return;

	const args = message.content.substring(process.env.PREFIX.length).split(/ +/);
	const command = client.commands.find(cmd => cmd.name === args[0]) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));

	if(!command) return message.reply('that command does not exist, stoopid :rolling_eyes:');
	
	message.createMessageComponentCollector({ componentType: 'SELECT_MENU', time: 15000 });
	
	command.run(message, args, client);
});

client.login(process.env.TOKEN);