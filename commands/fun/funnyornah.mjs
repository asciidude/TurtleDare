import { MessageEmbed } from 'discord.js';

export default {
	name: 'funnyornah',
	description: 'was it funny or nah',
	usage: `$funnyrating <message>`,
	aliases: ['funnyrating', 'ratemyfunny', 'ratefunny'],
	category: 'fun',

	async run(message, args, client) {
        const rating = Math.floor(Math.random() * 100) + 1;

		message.channel.send({
			embeds: [
				new MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`you are ${rating}% funny, ${rating > 50 ? 'that was pretty funny' : 'that was a terrible joke. don\'t make anymore jokes, it\'s too shitty'}`)
					.setFooter(message.member.displayName, message.member.displayAvatarURL())
					.setTimestamp()
			]
		});
	}
}