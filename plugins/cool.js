const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙Aᴘᴀʀɴᴀ-Mᴡᴏʟ💙■□══╗*\n           \n*⚜═ᴀᴍʀᴜ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Mɪᴅʜᴜɴ-ᴋᴀʟɪᴘᴘᴀɴ - https://api.whatsapp.com/send?phone=+917025631103&text=Please%20add%20Aᴘᴀʀɴᴀ-Mᴡᴏʟ20%bot%20ɢʀᴏᴜᴘ%20💙*\n*            *\n*╚══■□💙Aᴘᴀʀɴᴀ-Mᴡᴏʟ💙■□══╝*\n\n*▷Creator: Mɪᴅʜᴜɴ-ᴋᴀʟɪᴘᴘᴀɴ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═Aᴘᴀʀɴᴀ-Mᴡᴏʟ ᴏᴡɴᴇʀ Mɪᴅʜᴜɴ-ᴋᴀʟɪᴘᴘᴀɴ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-Aᴍʀᴜᴛʜᴇsʜ═🌟*\n\n*🔅https://github.com/Midhun-kalippan/Aparna-Mwol*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙Aᴘᴀʀɴᴀ-Mᴡᴏʟ💙■□══╗*\n           \n*⚜═ᴀᴍʀᴜ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Mɪᴅʜᴜɴ-ᴋᴀʟɪᴘᴘᴀɴ - https://api.whatsapp.com/send?phone=+917025631103&text=Please%20add%20Aᴘᴀʀɴᴀ-Mᴡᴏʟ20%bot%20ɢʀᴏᴜᴘ%20💙*\n*            *\n*╚══■□💙Aᴘᴀʀɴᴀ-Mᴡᴏʟ💙■□══╝*\n\n*▷Creator: Mɪᴅʜᴜɴ-ᴋᴀʟɪᴘᴘᴀɴ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═Mɪᴅʜᴜɴ-ᴋᴀʟɪᴘᴘᴀɴ ᴏᴡɴᴇʀ ᴍɪᴅʜᴜɴ-x3»« ʀᴇᴀʟ ɴᴀᴍᴇ-Mɪᴅʜᴜɴ═🌟*\n\n*🔅https://github.com/Midhun-kalippan/Aparna-Mowl*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
