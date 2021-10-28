import { MessageEmbed } from 'discord.js';
import fetch from 'node-fetch';

export default {
	name: 'meme',
	description: 'get some funny hahas',
	usage: `$meme`,
	aliases: ['funny'],
	category: 'fun',

	async run(message, args, client) {
        const res = fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                if(json.nsfw || !message.channel.nsfw) {
                    message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle(`${json.spoiler ? 'SPOILERS AHEAD! ' : ''}${json.title}`)
                                .setURL(json.postLink)
                                .setImage(json.url)
                                .setDescription(`${args.splice(1).join(' ')}`)
                                .setFooter(`👍 ${json.ups}`, message.member.displayAvatarURL())
                                .setTimestamp()
                        ]
                    });
                } else {
                    message.reply('you better turn on NSFW to see some memes... 😳🔞')
                }
            });
	}
}