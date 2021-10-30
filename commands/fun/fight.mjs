import { MessageEmbed } from 'discord.js';

export default {
	name: 'fight',
	description: 'have two people fight.. thats crazy',
	usage: `$fight <user|text> <user|text>`,
	aliases: ['vs', 'hurt', 'kill'],
	category: 'fun',

	async run(message, args, client) {
        args.shift();

        if(args.length !== 2) {
            message.channel.send({
                embeds: [
                    new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('ayo bruh')
                        .setDescription('u need to add two people to the arguments')
                        .setFooter(message.member.displayName, message.member.displayAvatarURL())
                        .setTimestamp()
                ]
            });

            return
        }

        if(args[0] == args[1]) {
            message.channel.send({
                embeds: [
                    new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('ayo bruh')
                        .setDescription('how tf is that person gonna fight themselves?')
                        .setFooter(message.member.displayName, message.member.displayAvatarURL())
                        .setTimestamp()
                ]
            });

            return;
        }

        const user = args[Math.floor(Math.random() * args.length)];
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('HOLY \*\*\*\*!!')
                    .setDescription(`${user} JUST OBLITERATED ${args.filter((e) => e !== user)}`)
                    .setFooter(message.member.displayName, message.member.displayAvatarURL())
                    .setTimestamp()
            ]
        });
	}
}