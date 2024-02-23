const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1210687722688221224",
    token: "tSija8VzkMau3JviX6yGzG6koroSPzMMbop6cpV6K0qEhgTzfnfp7hedgI30O_rp9NQu",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 
