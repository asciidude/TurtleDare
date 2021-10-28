import { MessageEmbed } from 'discord.js';

export default {
	name: 'echo',
	description: 'echo a message',
	usage: `$echo <message>`,
	aliases: ['print', 'log', 'say'],
	category: 'fun',

	async run(message, args, client) {
		message.channel.send({
			embeds: [
				new MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`${args.splice(1).join(' ')}`)
					.setFooter(message.member.displayName, message.member.displayAvatarURL())
					.setTimestamp()
			]
		});

		message.delete();
	}
}