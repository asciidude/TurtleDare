import { MessageEmbed, MessageActionRow, MessageSelectMenu } from 'discord.js';
import removeDuplicates from '../../utils/removeDuplicates.mjs';

export default {
	name: 'help',
	description: 'get a nice help embed',
	usage: `$help <category|command>`,
	aliases: ['commands'],
	category: 'information',

	async run(message, args, client) {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('help')
			.setDescription('click the menu below for the help menu, this embed will change accordingly')
			.setFooter(message.member.displayName, message.member.displayAvatarURL())
			.setTimestamp();
		
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('help')
					.setMaxValues(1)
					.setMinValues(1)
					.setPlaceholder('🤔 Make a selection...')
					.addOptions([
						{
							label: '🎉 Fun',
							description: 'Show a list of fun commands',
							value: 'FUN',
						},
						{
							label: '🧐 Information',
							description: 'Show a list of informational commands',
							value: 'INFORMATION',
						},
					])
			);
		
		try {
			const msg = await message.member.send({
				embeds: [embed],
				components: [row]
			});

			const collector = msg.createMessageComponentCollector({ componentType: 'SELECT_MENU', time: 60000 });

			collector.on('collect', interaction => {
				embed.fields = [];
				const categories = client.commands.filter(cmd => interaction.values[0].toLowerCase() == cmd.category);
				
				for(const command of categories) {
					embed.addField(`${command[1].name} | \`${command[1].usage}\``,
								   `*${command[1].description}*\n**aliases:** ${command[1].aliases ? command[1].aliases.join(', ') : 'none'}`,
								   true)
				}

				msg.edit({
					embeds: [
						embed.setDescription('')
					]
				});
				
				interaction.deferUpdate();
			});

			collector.on('end', collection => {
				msg.delete();
			});
		} catch(err) {
			message.reply('i am unable to send messages to you, enable dms on this server or globally and then re-run the help command :slight_smile:')
			console.log(`Unable to send messages to ${interaction.member.username}`);
		}
	}
}