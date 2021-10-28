import { MessageEmbed } from 'discord.js';

export default {
	name: 'repo',
	description: 'get the github repo',
	usage: `$repo`,
	aliases: ['github', 'git'],
	category: 'information',

	async run(message, args, client) {
		await message.member.send({
			embeds: [
                new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('git repo')
                    .setDescription('click the title for my github repository, or [click here](https://github.com/asciidude/TurtleDare)')
                    .setFooter(message.member.displayName, message.member.displayAvatarURL())
                    .setURL('https://github.com/asciidude/TurtleDare')
                    .setTimestamp()
            ]
		});
	}
}