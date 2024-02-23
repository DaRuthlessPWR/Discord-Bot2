const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Ruthless`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</2.Ruthless>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `💜Anarchy Sec`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[http://ruthless.my.id](http://ruthless.my.id)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
