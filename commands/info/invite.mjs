import { MessageEmbed, MessageActionRow, MessageSelectMenu } from 'discord.js';

export default {
	name: 'invite',
	description: 'get the bot invite',
	usage: `$invite`,
	aliases: ['inv', 'addbot'],
	category: 'information',

	async run(message, args, client) {
		await message.member.send({
			embeds: [
                new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('bot invite')
                    .setDescription('click the title for my github repository, or [click here](https://discord.com/api/oauth2/authorize?client_id=901562091691986995&permissions=8&scope=applications.commands%20bot)')
                    .setFooter(message.member.displayName, message.member.displayAvatarURL())
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=901562091691986995&permissions=8&scope=applications.commands%20bot')
                    .setTimestamp()
            ]
		});
	}
}