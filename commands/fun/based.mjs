import { MessageEmbed } from 'discord.js';

export default {
	name: 'based',
	description: 'reply to a message with a gif in an embed',
	usage: `$based`,
	category: 'fun',

	async run(message, args, client) {
        const gifs = [
            'https://c.tenor.com/ivHnq-1_gyIAAAAS/mario-super-mario-style.gif',
            'https://c.tenor.com/qGwpejCGPk0AAAAM/based-jesse-lee-peterson.gif',
            'https://c.tenor.com/XSEo6MxOLigAAAAM/basedspongebob-based.gif',
            'https://c.tenor.com/yab2xenfAKUAAAAM/based.gif',
            'https://c.tenor.com/kNvZxpzzzPgAAAAC/hygiene-based.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/521/953/5c0.gif',
			'https://c.tenor.com/F0nvl5mF-q4AAAAC/boi-what-the-hail-boi.gif'
        ];

		message.channel.send({
			embeds: [
				new MessageEmbed()
					.setColor('RANDOM')
                    .setTitle('based')
                    .setImage(gifs[Math.floor(Math.random() * gifs.length)])
					.setFooter(message.member.displayName, message.member.displayAvatarURL())
					.setTimestamp()
			]
		});
	}
}