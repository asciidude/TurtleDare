import { MessageEmbed, MessageActionRow, MessageSelectMenu } from 'discord.js';
import removeDuplicates from '../../utils/removeDuplicates.mjs';

export default {
	name: 'help',
	description: 'get a nice help embed',
	usage: `$help <category|command>`,
	aliases: ['commands'],
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