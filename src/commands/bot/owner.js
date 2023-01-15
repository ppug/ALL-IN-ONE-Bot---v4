const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Spadeỵ#0001`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Spadeỵ>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Pug & spade Inc.`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://www.youtube.com/channel/UCioUw5dZ8QmFnrtvAVaqZ8w](https://www.youtube.com/channel/UCioUw5dZ8QmFnrtvAVaqZ8w)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 