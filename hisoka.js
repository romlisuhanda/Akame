/**
 * Base By Dika Ardnt.
 * Recode By GuaAbuzz
 * Kalau Mau Recode, Edit Aja Di confiq.js
 * Contact Me On wa.me/6289636827082
 * Follow https://github.com/Abuzzpoet
 */
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    WAMessageStubType,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const {
    JSDOM
} = require('jsdom')
const speed = require('performance-now')
const moment = require("moment-timezone");
const {
    performance
} = require('perf_hooks')
const {
    Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
let {
    TelegraPh
} = require('./lib/uploader')
const {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom
} = require('./lib/myfunc')
const xfarr = require('xfarr-api')
const {
    addInventoriDarah,
    cekDuluJoinAdaApaKagaDiJson,
    addDarah,
    kurangDarah,
    getDarah
} = require('./storage/user/darah.js')
const {
    cekInventoryAdaAtauGak,
    addInventori,
    addBesi,
    addEmas,
    addEmerald,
    addUmpan,
    addPotion,
    kurangBesi,
    kurangEmas,
    kurangEmerald,
    kurangUmpan,
    kurangPotion,
    getBesi,
    getEmas,
    getEmerald,
    getUmpan,
    getPotion
} = require('./storage/user/alat_tukar.js')
const {
    addInventoriMonay,
    cekDuluJoinAdaApaKagaMonaynyaDiJson,
    addMonay,
    kurangMonay,
    getMonay
} = require('./storage/user/monay.js')
const {
    addInventoriLimit,
    cekDuluJoinAdaApaKagaLimitnyaDiJson,
    addLimit,
    kurangLimit,
    getLimit
} = require('./storage/user/limit.js')
const {
    cekDuluHasilBuruanNya,
    addInventoriBuruan,
    addIkan,
    addAyam,
    addKelinci,
    addDomba,
    addSapi,
    addGajah,
    kurangIkan,
    kurangAyam,
    kurangKelinci,
    kurangDomba,
    kurangSapi,
    kurangGajah,
    getIkan,
    getAyam,
    getKelinci,
    getDomba,
    getSapi,
    getGajah
} = require('./storage/user/buruan.js')
let DarahAwal = global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟', '🐠', '🐡']

//rpg database
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)

        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒆𝒕𝒂𝒏𝒈 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒖𝒃𝒖𝒉 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑻𝒆𝒏𝒈𝒂𝒉 𝑴𝒂𝒍𝒂𝒎 🌃'
        }

        //Time Menuju Lebaran Ke 2
        const IdulAdha = new Date('July 9, 2022 06:00:00')
        const sekarang = new Date().getTime();
        const Selisih = IdulAdha - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`


        //━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "6289636827082-1635036556@g.us"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: fs.readFileSync('./storage/menu/hisoka.jpg'),
                    surface: 200,
                    message: `Haii Kak ${pushname}\n𝙲𝚖𝚍 ${command}`,
                    orderTitle: 'Please Follow TikTok @GuaAbuzz',
                    sellerJid: '0@s.whatsapp.net'
                }
            },
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }
        //END

        //member
        let picaks = [flaming, fluming, flarun, flasmurf]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
            if (typeof chats !== 'object') global.db.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilinkwa' in chats)) chats.antilinkwa = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
            } else global.db.chats[m.chat] = {
                mute: false,
                antilinkwa: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
            }

            let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
            } else global.db.settings[botNumber] = {
                status: 0,
                autobio: false,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }


        // write database every 1 minute
        setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
            let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
            let {
                text,
                mentionedJid
            } = hash
            let messages = await generateWAMessage(m.chat, {
                text: text,
                mentions: mentionedJid
            }, {
                userJid: hisoka.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            hisoka.ev.emit('messages.upsert', msg)
        }

        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, {
                contextInfo: {
                    mentionedJid: parseMention(caption)
                }
            }).then(mes => {
                return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak lagu',
                    buttonText: {
                        displayText: 'Tebak Lagu'
                    },
                    type: 1
                }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak gambar',
                    buttonText: {
                        displayText: 'Tebak Gambar'
                    },
                    type: 1
                }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak kata',
                    buttonText: {
                        displayText: 'Tebak Kata'
                    },
                    type: 1
                }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak lontong',
                    buttonText: {
                        displayText: 'Tebak Lontong'
                    },
                    type: 1
                }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak kalimat',
                    buttonText: {
                        displayText: 'Tebak Kalimat'
                    },
                    type: 1
                }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak lirik',
                    buttonText: {
                        displayText: 'Tebak Lirik'
                    },
                    type: 1
                }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{
                    buttonId: 'tebak tebakan',
                    buttonText: {
                        displayText: 'Tebak Tebakan'
                    },
                    type: 1
                }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        // auto set bio
        if (db.settings[botNumber].autobio) {
            let setting = global.db.settings[botNumber]
            if (new Date() * 1 - setting.status > 1000) {
                let uptime = await runtime(process.uptime())
                await hisoka.setStatus(`🤖 ${hisoka.user.name} | ⏳ Runtime : ${runtime(uptime)}`)
                setting.status = new Date() * 1
            }
        }

        //Anti Link
        if (db.chats[m.chat].antilinkwa) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK WHATSAPP 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await hisoka.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh maaf kamu ngirim link group ini`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link YouTube
        if (db.chats[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                m.reply(`「 ANTI LINK YOUTUBE 」\n\nKamu terdeteksi mengirim link YouTube, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.chats[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                m.reply(`「 ANTI LINK TIKTOK 」\n\nKamu terdeteksi mengirim link TikTok, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.chats[m.chat].antivirtex) {
            if (budy.length > 3500) {
                m.reply(`「 ANTI VIRTEX 」\n\nKamu terdeteksi mengirim Virtex, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        // Mute Chat
        if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            await hisoka.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, {
                    mentions: [roof.p, roof.p2]
                })
                delete this.suit[roof.id]
            }
        }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        switch (command) {
            case 'inventori':
            case 'inventory':
            case 'profile': {
                if (q.includes('--help')) return m.reply(examkosong)
                if (!isDarah) {
                    addInventoriDarah(m.sender, DarahAwal)
                }
                if (!isInventory) {
                    addInventori(m.sender)
                }
                if (!isInventoriBuruan) {
                    addInventoriBuruan(m.sender)
                }

                var ThadzBotZ = await getBuffer(picak + `User's Inventory`)
                let teksehmazeh = `_[ INFO USER ]_\n\n`
                teksehmazeh += `*Darah* : ${getDarah(m.sender)}\n`
                teksehmazeh += `*Iron* : ${getBesi(m.sender)}\n`
                teksehmazeh += `*Gold* : ${getEmas(m.sender)}\n`
                teksehmazeh += `*Emerald* : ${getEmerald(m.sender)}\n`
                teksehmazeh += `*Limit* : ${getLimit(m.sender)}\n`
                teksehmazeh += `*Potion* : ${getPotion(m.sender)}\n\n`
                teksehmazeh += `_[ HUNT RESULT ]_\n`
                teksehmazeh += `*Ikan* : ${getIkan(m.sender)}\n`
                teksehmazeh += `*Ayam* : ${getAyam(m.sender)}\n`
                teksehmazeh += `*Kelinci* : ${getKelinci(m.sender)}\n`
                teksehmazeh += `*Domba* : ${getDomba(m.sender)}\n`
                teksehmazeh += `*Sapi* : ${getSapi(m.sender)}\n`
                teksehmazeh += `*Gajah* : ${getGajah(m.sender)}\n\n`
                teksehmazeh += `_*${pushname}*_`
                await hisoka.send5ButImg(m.chat, `` + '' + teksehmazeh, footer, ThadzBotZ, [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }])
            }
            break
            case 'userlimit':
            case 'alllimit':
            case 'limit': {
                let txt = `「 *ALL LIMIT USER* 」\n\n`
                for (let i of _limit) {
                    txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                }
                m.reply(txt)
            }
            break
            case 'leaderboard':
            case 'lb': {
                let te1 = `「 *LEADERBOARD* 」\n\n`
                for (let i of _buruan) {
                    te1 += `➸ *ID :* ${i.id}\n`
                    te1 += `*Ikan* : ${i.ikan}\n`
                    te1 += `*Chicken* : ${i.ayam}\n`
                    te1 += `*Kelinci* : ${i.kelinci}\n`
                    te1 += `*Domba* : ${i.domba}\n`
                    te1 += `*Sapi* : ${i.sapi}\n`
                    te1 += `*Gajah* : ${i.gajah}\n\n`
                }
                m.reply(te1)
            }
            break
            case 'mining':
            case 'mine': {
                if (q.includes('--help')) return m.reply(examkosong)
                if (!isInventory) {
                    addInventori(m.sender)
                }
                if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
                let besi = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0]
                let emas = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2]
                let emerald = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1]
                var besinya = besi[Math.floor(Math.random() * besi.length)]
                var emasnya = emas[Math.floor(Math.random() * emas.length)]
                var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
                setTimeout(() => {
                    let caption = `[ HASIL MINING ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
                    let buttons = [{
                        buttonId: `${prefix}mining`,
                        buttonText: {
                            displayText: 'Mining ⛏️'
                        },
                        type: 1
                    }]
                    let buttonMessage = {
                        image: {
                            url: './storage/image/tambang.jpg'
                        },
                        caption: caption,
                        footer: footer,
                        buttons: buttons,
                        headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, {
                        quoted: ftroli
                    })

                }, 7000)
                setTimeout(() => {
                    m.reply(`@${m.sender.split("@")[0]} Mulai Mining ⛏️`)
                }, 1500)
                kurangDarah(m.sender, 10)
                addBesi(m.sender, besinya)
                addEmas(m.sended, emasnya)
                addEmerald(m.sender, emeraldnya)
            }
            break
            case 'beli':
            case 'buy': {
                if (q.includes('--help')) return m.reply(examkosong)
                if (!isInventoriBuruan) {
                    addInventoriBuruan(m.sender)
                }
                if (!isInventoryMonay) {
                    addInventoriMonay(m.sender)
                }
                if (!isInventory) {
                    addInventori(m.sender)
                }
                if (!q) return m.reply(`Mau beli apa?\n\n1.potion\n2.baitfood\n3.limit\n\nContoh: ${prefix + command} baitfood`)
                var anu = args[1]
                if (args[0] === 'potion') {
                    let noh = 100000 * anu
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
                    if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
                    kurangMonay(m.sender, noh)
                    var apalu = anu * 1
                    addPotion(m.sender, apalu)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Potion* : ${getPotion(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'baitfood') {
                    let noh = 5000 * anu
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
                    if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
                    kurangMonay(m.sender, noh)
                    var apalu = anu * 1
                    addUmpan(m.sender, apalu)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Bait Food* : ${getUmpan(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'limit') {
                    let noh = 35000 * anu
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
                    if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
                    kurangMonay(m.sender, noh)
                    var apalu = anu * 1
                    addLimit(m.sender, apalu)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Limit* : ${getLimit(m.sender)}`)
                    }, 2000)
                } else {
                    m.reply("Format salah!")
                }
            }
            break
            case 'sell':
            case 'jual': {
                if (!q) return m.reply(`Mau Jual Apa?\nContoh : ${prefix + command} ikan 2`)
                if (!isInventoriBuruan) {
                    addInventoriBuruan(m.sender)
                }
                if (!isInventoryMonay) {
                    addInventoriMonay(m.sender)
                }
                if (!isInventory) {
                    addInventori(m.sender)
                }
                if (!q) return m.reply(`Mau beli apa?\n\n1.ikan\n2.ayam\n3.kelinci\n4.domba\n5.sapi\n6.gajah\n7.iron\n8.gold\n9.emerald\n\nContoh: ${prefix + command} ikan`)
                var anu = args[1]
                if (args[0] === 'ikan') {
                    if (isIkan < anu) return m.reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} ikan 2\n 1 Ikan = 1500 Money`)
                    kurangIkan(m.sender, anu)
                    let monaynya = 1500 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Ikan Anda* : ${getIkan(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'ayam') {
                    if (isAyam < anu) return m.reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} ayam 2\n 1 Ayam = 2500 Money`)
                    kurangAyam(m.sender, anu)
                    let monaynya = 2500 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Ayam Anda* : ${getAyam(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'kelinci') {
                    if (isKelinci < anu) return m.reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} kelinci 2\n 1 Kelinci = 3000 Money`)
                    kurangKelinci(m.sender, anu)
                    let monaynya = 3000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Kelinci Anda* : ${getKelinci(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'domba') {
                    if (isDomba < anu) return m.reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} domba 2\n 1 Domba = 5000 money`)
                    kurangDomba(m.sender, anu)
                    let monaynya = 5000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Domba Anda* : ${getDomba(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'sapi') {
                    if (isSapi < anu) return m.reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} sapi 2\n 1 Sapi = 10000 Money`)
                    kurangSapi(m.sender, anu)
                    let monaynya = 10000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Sapi Anda* : ${getSapi(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'gajah') {
                    if (isGajah < anu) return m.reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} gajah 2\n 1 Gajah = 15000 Money`)
                    kurangGajah(m.sender, anu)
                    let monaynya = 15000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Gajah Anda* : ${getGajah(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'iron') {
                    if (isBesi < anu) return m.reply(`Anda Tidak Memiliki Cukup Iron Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
                    kurangBesi(m.sender, anu)
                    let monaynya = 16000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Iron Anda* : ${getBesi(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'gold') {
                    if (isEmas < anu) return m.reply(`Anda Tidak Memiliki Cukup Gold Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
                    kurangEmas(m.sender, anu)
                    let monaynya = 50000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Emas Anda* : ${getEmas(m.sender)}`)
                    }, 2000)
                } else if (args[0] === 'emerald') {
                    if (isEmerald < anu) return m.reply(`Anda Tidak Memiliki Cukup Emerald Untuk Transaksi Ini`)
                    if (!args[1]) return m.reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
                    kurangEmerald(m.sender, anu)
                    let monaynya = 100000 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        m.reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Emerald Anda* : ${getEmerald(m.sender)}`)
                    }, 2000)
                } else {
                    m.reply("Format salah!")
                }
            }
            break
            case 'heal': {
                if (q.includes('--help')) return m.reply(examkosong)
                if (!isCekDarah < 1) return m.reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
                if (isCekDarah > 100) return m.reply('Darahmu Penuh')
                if (isPotion < 1) return m.reply(`Anda Tidak Punya Potion, Coba Beli Dengan Cara Ini ${prefix}buy potion`)
                addDarah(m.sender, 100)
                kurangPotion(m.sender, 1)
                m.reply('Success!')
            }
            break
            case 'hunt':
            case 'hunting':
            case 'berburu': {
                if (q.includes('--help')) return m.reply(examkosong)
                if (!isDarah) {
                    addInventoriDarah(m.sender, DarahAwal)
                }
                if (isCekDarah < 1) return m.reply('Darahmu Habis, Coba Sembuhkan Menggunakan Potion')
                if (!isInventoriBuruan) {
                    addInventoriBuruan(m.sender)
                }
                let luka = ["Ditusuk duri saat berburu", "Tergelincir ke dalam jurang saat berburu", "Digores oleh binatang buas", "Kurang teliti", "Terjerat dalam akar", "Jatuh saat berburu"]
                let location = ["Hutan", "Hutan Amazon", "Hutan Tropis", "Padang Rumput", "Hutan Afrika", "Pegunungan"]
                var ikanmu = Math.ceil(Math.random() * 10)
                var ayam = Math.ceil(Math.random() * 8)
                var kelinci = Math.ceil(Math.random() * 7)
                var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
                var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
                var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
                var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
                var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
                var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
                var lukanya = luka[Math.floor(Math.random() * luka.length)]
                var lokasinya = location[Math.floor(Math.random() * location.length)]
                if (lokasinya === 'Hutan') {
                    var image = './storage/image/rimba.jpg'
                } else
                if (lokasinya === 'Hutan Amazon') {
                    var image = './storage/image/amazon.jpg'
                } else
                if (lokasinya === 'Hutan Tropis') {
                    var image = './storage/image/tropis.jpg'
                } else
                if (lokasinya === 'Padang Rumput') {
                    var image = './storage/image/padang_rumput.jpg'
                } else
                if (lokasinya === 'Hutan Afrika') {
                    var image = './storage/image/afrika.jpg'
                } else
                if (lokasinya === 'Pegunungan') {
                    var image = './storage/image/pegunungan.jpg'
                }
                setTimeout(() => {
                    let teksehmazeh = `_[ HUNT RESULT ]_\n`
                    teksehmazeh += `*Ikan* : ${ikanmu}\n`
                    teksehmazeh += `*Ayam* : ${ayam}\n`
                    teksehmazeh += `*Kelinci* : ${kelinci}\n`
                    teksehmazeh += `*Domba* : ${domba}\n`
                    teksehmazeh += `*Sapi* : ${sapi}\n`
                    teksehmazeh += `*Gajah* : ${gajah}\n\n`
                    teksehmazeh += `_[ INFO ]_\n`
                    teksehmazeh += `*Lokasi* : ${lokasinya}\n`
                    teksehmazeh += `*Luka* : ${lukanya}, blood - 10\n`
                    teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
                    let buttons = [{
                        buttonId: `${prefix + command}`,
                        buttonText: {
                            displayText: 'Berburu 🏹'
                        },
                        type: 1
                    }, ]
                    let buttonMessage = {
                        image: {
                            url: image
                        },
                        caption: teksehmazeh,
                        footer: footer,
                        buttons: buttons,
                        headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, {
                        quoted: ftroli
                    })
                }, 5000)
                setTimeout(() => {
                    m.reply(`@${m.sender.split("@")[0]} Mulai Berburu 🏹 Di ${lokasinya}`)
                }, 1000)
                addIkan(m.sender, ikanmu)
                addAyam(m.sender, ayam)
                addKelinci(m.sender, kelinci)
                addDomba(m.sender, domba)
                addSapi(m.sender, sapi)
                addGajah(m.sender, gajah)
                kurangDarah(m.sender, 10)
            }
            break
            //Nah Udah
            case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    m.reply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await hisoka.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        m.reply(`Session TicTacToe🎮 tidak ada`)
                    } else throw '?'
                } catch (e) {
                    m.reply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await hisoka.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'myip': {
            if (!isCreator) throw mess.owner
            let anu = await fetchJson('https://api.ipify.org/?format=json')
            txt = `🔎 My public IP address is : ${anu.result}`
            m.reply(txt)
                }
                break
            //Salam
            case 'Assalamualaikum':
            case 'assalamualaikum':
            case 'Assalamualaikum Wr. Wb':
                m.reply(`Waalaikumsalam Kak ${pushname} 🙏`)
                break
            case 'Shalom':
            case 'Salam Sejahtera':
            case 'shalom':
            case 'salam sejahtera':
            case 'Salam sejahtera':
                m.reply(`Salam Sejahtera Juga Untukmu Kak ${pushname} 🙏`)
                break
            case 'Om Swastyastu':
            case 'om swastyastu':
            case 'Om swastyastu':
                m.reply(`Om Santi, Santi, Santi, Om Kak ${pushname} 🙏`)
                break
            case 'Namo Buddhaya':
            case 'Namo buddhaya':
            case 'namo buddhaya':
                m.reply(`Nammo Buddhaya Juga Kak ${pushname} 🙏`)
                break
            case 'Wie De Dong Tian':
            case 'Wie de dong tian':
            case 'wie de dong tian':
                m.reply(`Xian You Yi De Kak ${pushname} 🙏`)
                break

                //Thx
            case 'thanks':
            case 'makasih':
            case 'thx':
            case 'tengkiyu':
            case 'terima kasih':
            case 'Terima Kasih':
            case 'Terima kasih':
                m.reply(`Sama-Sama Kak ${pushname}`)
                break

                //Case Cek Prefix
            case 'cekpref':
            case 'cekprefix':
                m.reply('Bot Ini Menggunakan Multi Prefix Dan No Prefix')
                break
                //Balas Cepat
            case 'p':
                m.reply(`Ketik #menu Untuk Melihat List Menu Bot`)
                break
            case 'agamabot':
            case 'agamaowner':
                m.reply(`Agama Saya ${global.agama}, Walaupun Berbeda Adat/Suku/Ras/Agama Jangan Lupa Toleransi Sesama Manusia Itu Juga Penting Ya Guys🙏`)
                break
            case 'tqtt':
            case 'tqto':
            case 'thanksto': {
                anu = `
⭔ Allah SWT.
⭔ Ortu Saya.
⭔ DikaArdnt (Author).
⭔ Sanzy YT.
⭔ GuaAbuzz (Saya).
⭔ Fatih A.
⭔ Nurutomo.
⭔ Mhankbarbar.
⭔ ZeeoneOfc.
⭔ Penyedia Module.
⭔ Penyedia Res Api's.
⭔ All My Friends.

• Library : *Baileys-MD*.
• Prefix : ( ${prefix} )
• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
• Wib : ${wib}
• Wita : ${wita}
• Wit : ${wit}`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'command': {
                let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    listMessage: {
                        title: `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO USER 」
│└─────────────┈❖
│ Name : ${pushname}
│ Number : ${m.sender.split('@')[0]}
│ Status : ${isCreator ? 'Owner' : 'User'}
│ User : ${Object.keys(global.db.users).length}
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}
│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Platform : ${os.platform()}
│ Runtime :
│  ${runtime(process.uptime())}
│ Language : Javascript
│ Lib : Baileys-md
└┬─────────────┈❖
┌┤「 INFO TIME 」
│└─────────────┈❖
│ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│ Menuju idul Adha :
│  ${menuju}
│ WIB : ${wib}
│ WITA : ${wita}
│ WIT : ${wit}
└──────────────┈❖`,
                        description: "\n",
                        buttonText: "LIST MENU  >_<",
                        footerText: "Donasi Kak Buat Beli Apikey🔥",
                        listType: "SINGLE_SELECT",
                        sections: [{
                                "title": "All Fitur Bot >_<",
                                "rows": [{
                                    "title": "「 All Menu 」",
                                    "description": "Menampilkan All Menu",
                                    "rowId": `${prefix}allmenu`
                                }]
                            },
                            {
                                "title": "List menu Bot >_<",
                                "rows": [{
                                        "title": "「 Anonymous Menu 」",
                                        "description": "Menampilkan Anonymous Menu",
                                        "rowId": `${prefix}anonymousmenu`
                                    },
                                    {
                                        "title": "「 Anime Menu 」",
                                        "description": "Menampilkan Anime Menu",
                                        "rowId": `${prefix}animemenu`
                                    },
                                    {
                                        "title": "「 Asupan Menu 」",
                                        "description": "Menampilkan Asupan Menu",
                                        "rowId": `${prefix}asupanmenu`
                                    },
                                    {
                                        "title": "「 Convert Menu 」",
                                        "description": "Menampilkan Convert Menu",
                                        "rowId": `${prefix}convertmenu`
                                    },
                                    {
                                        "title": "「 Download Menu 」",
                                        "description": "Menampilkan Download Menu",
                                        "rowId": `${prefix}downloadmenu`
                                    },
                                    {
                                        "title": "「 Database Menu 」",
                                        "description": "Menampilkan Database Menu",
                                        "rowId": `${prefix}databasemenu`
                                    },
                                    {
                                        "title": "「 Ephoto Menu 」",
                                        "description": "Menampilkan Ephoto Menu",
                                        "rowId": `${prefix}ephotomenu`
                                    },
                                    {
                                        "title": "「 Group Menu 」",
                                        "description": "Menampilkan Group Menu",
                                        "rowId": `${prefix}groupmenu`
                                    },
                                    {
                                        "title": "「 Game Menu 」",
                                        "description": "Menampilkan Game Menu",
                                        "rowId": `${prefix}gamemenu`
                                    },
                                    {
                                        "title": "「 Islamic Menu 」",
                                        "description": "Menampilkan Islamic Menu",
                                        "rowId": `${prefix}islamicmenu`
                                    },
                                    {
                                        "title": "「 Kerang Menu 」",
                                        "description": "Menampilkan Kerang Menu",
                                        "rowId": `${prefix}kerangmenu`
                                    },
                                    {
                                        "title": "「 Meme Menu 」",
                                        "description": "Menampilkan Meme Image Menu",
                                        "rowId": `${prefix}mememenu`
                                    },
                                    {
                                        "title": "「 Main Menu 」",
                                        "description": "Menampilkan Main Menu",
                                        "rowId": `${prefix}mainmenu`
                                    },
                                    {
                                        "title": "「 Nsfw Menu 」",
                                        "description": "Menampilkan Nsfw Menu",
                                        "rowId": `${prefix}nsfwmenu`
                                    },
                                    {
                                        "title": "「 Owner Menu 」",
                                        "description": "Menampilkan Owner Menu",
                                        "rowId": `${prefix}ownermenu`
                                    },
                                    {
                                        "title": "「 Primbon Menu 」",
                                        "description": "Menampilkan Primbon Menu",
                                        "rowId": `${prefix}primbonmenu`
                                    },
                                    {
                                        "title": "「 Photo Maker Menu 」",
                                        "description": "Menampilkan Photo Maker Menu",
                                        "rowId": `${prefix}photomakermenu`
                                    },
                                    {
                                        "title": "「 Photo Oxy Menu 」️",
                                        "description": "Menampilkan Photo Oxy Menu",
                                        "rowId": `${prefix}photooxymenu`
                                    },
                                    {
                                        "title": "「 Quotes Menu 」",
                                        "description": "Menampilkan Quotes Menu",
                                        "rowId": `${prefix}quotesmenu`
                                    },
                                    {
                                        "title": "「 Rpg Menu 」️",
                                        "description": "Menampilkan Rpg Menu",
                                        "rowId": `${prefix}rpgmenu`
                                    },
                                    {
                                        "title": "「 Random Menu 」",
                                        "description": "Menampilkan Random Menu",
                                        "rowId": `${prefix}randommenu`
                                    },
                                    {
                                        "title": "「 Sticker Menu 」️",
                                        "description": "Menampilkan Sticker  Menu",
                                        "rowId": `${prefix}stickermenu`
                                    },
                                    {
                                        "title": "「 Search Menu 」",
                                        "description": "Menampilkan Search Menu",
                                        "rowId": `${prefix}searchmenu`
                                    },
                                    {
                                        "title": "「 Stalk Menu 」",
                                        "description": "Menampilkan Stalk Menu",
                                        "rowId": `${prefix}stalkmenu`
                                    },
                                    {
                                        "title": "「 Sticker Efek Menu 」️",
                                        "description": "Menampilkan Sticker Efek Menu",
                                        "rowId": `${prefix}stickerefekmenu`
                                    },
                                    {
                                        "title": "「 Sertifikat Menu 」️",
                                        "description": "Menampilkan Sertifikat Menu",
                                        "rowld": `${prefix}sertifikatmenu`
                                    },
                                    {
                                        "title": "「 Text Pro Menu 」",
                                        "description": "Menampilkan Text Pro menu",
                                        "rowId": `${prefix}textpromenu`
                                    },
                                    {
                                        "title": "「 Voice Changer Menu 」️",
                                        "description": "Menampilkan Voice Changer Menu",
                                        "rowId": `${prefix}voicemenu`
                                    },
                                    {
                                        "title": "「 Webzone Menu 」",
                                        "description": "Menampilkan Webzone Menu",
                                        "rowId": `${prefix}webzonemenu`
                                    }

                                ]
                            },
                            {
                                "title": "Open Jasa Sewabot >_<",
                                "rows": [{
                                    "title": "「 Sewa Bot 」",
                                    "description": "Klik Untuk Melihat Daftar Sewabot",
                                    "rowId": `${prefix}sewabot`
                                }]
                            },
                            {
                                "title": "Info Tentang Owner? >_<",
                                "rows": [{
                                    "title": "「 Chat Owner 」",
                                    "description": "menampilkan Nomor Owner",
                                    "rowId": `${prefix}owner`
                                }]
                            },
                            {
                                "title": "Thanks To >_<",
                                "rows": [{
                                    "title": "「 Contributor 」",
                                    "description": "menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!",
                                    "rowId": `${prefix}tqtt`
                                }]
                            }
                        ],
                        listType: 1
                    }
                }), {
                    userJid: m.chat,
                    quoted: ftroli
                })
                hisoka.relayMessage(m.chat, template.message, {
                    messageId: template.key.id
                })
            }
            break
            case 'sc':
            case 'script': {
                anu = `
                *Info Script*     
📚 *Base : Dika Ardnt* 
https://github.com/DikaArdnt/Hisoka-Morou

🌱 Recode By : GuaAbuzz
${global.scbot}`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Chat Owner Disini',
                        id: 'owner'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'tes':
            case 'test':
            case 'jaringan':
            case 'lag': {
                m.reply('Pending Ya Kak?')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({
                        mute: 'Infinity'
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({
                        mute: null
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({
                        archive: true
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({
                        archive: false
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({
                        markRead: true
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({
                        markRead: false
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({
                        clear: {
                            message: {
                                id: m.quoted.id,
                                fromMe: true
                            }
                        }
                    }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'family100': {
                if ('family100' + m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100' + m.chat] = {
                    id: 'family100' + m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'apakah':
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}`
                }, {
                    quoted: ftroli
                })

                break
            case 'bisakah':
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Pertanyaan : ${q}\nJawaban : ${ga}`
                }, {
                    quoted: ftroli
                })

                break
            case 'bagaimanakah':
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Pertanyaan : ${q}\nJawaban : ${ya}`
                }, {
                    quoted: ftroli
                })

                break
            case 'rate':

                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Rate : ${q}\nJawaban : *${te}%*`
                }, {
                    quoted: ftroli
                })

                break
            case 'gantengcek':
            case 'cekganteng':

                if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} GuaAbuzz`)
                const gan = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Nama : ${q}\nJawaban : *${teng}%*`
                }, {
                    quoted: ftroli
                })

                break
            case 'cantikcek':
            case 'cekcantik':

                if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const tik = can[Math.floor(Math.random() * can.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Nama : ${q}\nJawaban : *${tik}%*`
                }, {
                    quoted: ftroli
                })

                break
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi':
                if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Nama : ${q}\nJawaban : *${sange}%*`
                }, {
                    quoted: ftroli
                })

                break
            case 'kapankah':
                if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                hisoka.sendMessage(m.chat, {
                    text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*`
                }, {
                    quoted: ftroli
                })
                break
            case 'wangy':
                if (!q) return m.reply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                m.reply(awikwok)
                break
            case 'cekmati':
                if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                break
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh':
                if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                break
            case 'tebak': {
                if (!text) throw `Contoh : ${prefix + command} lagu\n\nOption : \n⬣ lagu\n⬣ gambar\n⬣ kata\n⬣ kalimat\n⬣ lirik\n⬣ lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, {
                        audio: {
                            url: result.link_song
                        },
                        mimetype: 'audio/mpeg'
                    }, {
                        quoted: ftroli
                    })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                        tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        hisoka.sendButtonText(m.chat, [{
                            buttonId: 'tebak lagu',
                            buttonText: {
                                displayText: 'Tebak Lagu'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        hisoka.sendButtonText(m.chat, [{
                            buttonId: 'tebak gambar',
                            buttonText: {
                                displayText: 'Tebak Gambar'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        hisoka.sendButtonText(m.chat, [{
                            buttonId: 'tebak kata',
                            buttonText: {
                                displayText: 'Tebak Kata'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        hisoka.sendButtonText(m.chat, [{
                            buttonId: 'tebak kalimat',
                            buttonText: {
                                displayText: 'Tebak Kalimat'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        hisoka.sendButtonText(m.chat, [{
                            buttonId: 'tebak lirik',
                            buttonText: {
                                displayText: 'Tebak Lirik'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                        caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                        caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        hisoka.sendButtonText(m.chat, [{
                            buttonId: 'tebak lontong',
                            buttonText: {
                                displayText: 'Tebak Lontong'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        delete caklontong[m.sender.split('@')[0]]
                        delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let {
                    genMath,
                    modes
                } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [{
                    buttonId: 'jodohku',
                    buttonText: {
                        displayText: 'Jodohku'
                    },
                    type: 1
                }]
                await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {
                    mentions: ments
                })
            }
            break
            case 'jadian': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let menst = [orang, jodoh]
                let buttons = [{
                    buttonId: 'jadian',
                    buttonText: {
                        displayText: 'Jodohku'
                    },
                    type: 1
                }]
                await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {
                    mentions: menst
                })
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: {
                            remoteJid: m.chat,
                            fromMe: true,
                            id: quoted.id
                        }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Contoh : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'culik': {
                if (args.length < 1) return m.reply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                hisoka.groupParticipantsUpdate(args[0], pantek)
            }
            break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setpp':
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, {
                    url: media
                }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, {
                    url: media
                }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
            break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `*👥 Tag All By Admin*
 
 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                hisoka.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'antilinkwa': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.chats[m.chat].antilinkwa) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.chats[m.chat].antilinkwa = true
                    m.reply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
                    db.chats[m.chat].antilink = false
                    m.reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'antilinkwa on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'antilinkwa off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink Group WhatsApp`, hisoka.user.name, ftroli)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.chats[m.chat].antilinkyt) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.chats[m.chat].antilinkyt = true
                    m.reply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.chats[m.chat].antilinkyt) return m.reply(`Sudah Nonaktif Sebelumnya`)
                    db.chats[m.chat].antilinkyt = false
                    m.reply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'antilinkyt on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'antilinkyt off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink YouTube`, hisoka.user.name, ftroli)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.chats[m.chat].antilinktt) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.chats[m.chat].antilinktt = true
                    m.reply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.chats[m.chat].antilinktt) return m.reply(`Sudah Nonaktif Sebelumnya`)
                    db.chats[m.chat].antilinktt = false
                    m.reply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'antilinktt on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'antilinktt off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink TikTok`, hisoka.user.name, ftroli)
                }
            }
            break
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.chats[m.chat].mute = true
                    m.reply(`${hisoka.user.name} telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.chats[m.chat].mute = false
                    m.reply(`${hisoka.user.name} telah di unmute di group ini 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'mute on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'mute off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, ftroli)
                }
            }
            break
            case 'style':
            case 'styletext': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let {
                    styletext
                } = require('./lib/scraper')
                if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `📝 *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
            }
            break

            case 'vote': {
                if (!m.isGroup) throw mess.group
                if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                if (!text) throw `Masukkan Alasan Melakukan Vote, Contoh: *${prefix + command} Owner Ganteng*`
                m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
                vote[m.chat] = [q, [],
                    []
                ]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
                let buttonsVote = [{
                        buttonId: `${prefix}upvote`,
                        buttonText: {
                            displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${prefix}devote`,
                        buttonText: {
                            displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'
                        },
                        type: 1
                    }
                ]

                let buttonMessageVote = {
                    text: teks_vote,
                    footer: hisoka.user.name,
                    buttons: buttonsVote,
                    headerType: 1
                }
                hisoka.sendMessage(m.chat, buttonMessageVote)
            }
            break
            case 'upvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
                let buttonsUpvote = [{
                        buttonId: `${prefix}upvote`,
                        buttonText: {
                            displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${prefix}devote`,
                        buttonText: {
                            displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'
                        },
                        type: 1
                    }
                ]

                let buttonMessageUpvote = {
                    text: teks_vote,
                    footer: hisoka.user.name,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                }
                hisoka.sendMessage(m.chat, buttonMessageUpvote)
            }
            break
            case 'devote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
                let buttonsDevote = [{
                        buttonId: `${prefix}upvote`,
                        buttonText: {
                            displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${prefix}devote`,
                        buttonText: {
                            displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'
                        },
                        type: 1
                    }
                ]

                let buttonMessageDevote = {
                    text: teks_vote,
                    footer: hisoka.user.name,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                hisoka.sendMessage(m.chat, buttonMessageDevote)
            }
            break

            case 'cekvote':
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
                hisoka.sendTextWithMentions(m.chat, teks_vote, m)
                break
            case 'deletevote':
            case 'delvote':
            case 'hapusvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                delete vote[m.chat]
                m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [{
                            buttonId: 'group open',
                            buttonText: {
                                displayText: 'Open'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'group close',
                            buttonText: {
                                displayText: 'Close'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [{
                            buttonId: 'editinfo open',
                            buttonText: {
                                displayText: 'Open'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'editinfo close',
                            buttonText: {
                                displayText: 'Close'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

                }
            }
            break
            case 'linkgroup':
            case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            }
            break
            case 'revoke':
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                await hisoka.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => m.reply(jsonformat(err)))
                break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, {
                        disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
                    }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, {
                        disappearingMessagesInChat: false
                    }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete':
            case 'del':
            case 'd': {
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot'
                hisoka.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nContoh : ${prefix + command} GuaAbuzz Oni-chan`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'TikTok Creator',
                            url: global.myweb
                        }
                    }, {
                        callButton: {
                            displayText: 'Number Phone Owner',
                            phoneNumber: global.owner[0]
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Ping',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Donasi',
                            id: 'donasi'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Sewabot',
                            id: 'sewabot'
                        }
                    }]
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc':
            case 'broadcast':
            case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nContoh : ${prefix + command} GuaAbuzz Oni-chan`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
                for (let yoi of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'TikTok Creator',
                            url: global.myweb
                        }
                    }, {
                        callButton: {
                            displayText: 'Number Phone Owner',
                            phoneNumber: global.owner[0]
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Ping',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Donasi',
                            id: 'donasi'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Sewabot',
                            id: 'sewabot'
                        }
                    }]
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
                }
                m.reply('Sukses Broadcast')
            }
            break
            case 'bcallmedia': {
                if (!isCreator) throw mess.owner
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {

                    await sleep(1500)

                    hisoka.copyNForward(i, quoted.fakeObj, false, {
                        quoted: ftroli
                    })

                }

                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chat`)

            }

            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q':
            case 'quoted': {
                if (!m.quoted) return m.reply('Reply Pesannya!!')
                let wokwol = await hisoka.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            case 'listpc': {
                if (!isCreator) return m.reply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, tekslist, m)
            }
            break
            case 'listgc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await hisoka.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, tekslistgc, m)
            }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) m.reply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                hisoka.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
            case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                m.reply(eb)
            }
            break
            case 'dbinary': {
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                m.reply(db)
            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
                if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'emojimix2': {
                if (!text) throw `Contoh : ${prefix + command} 😅`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'attp':
            case 'ttp': {
                if (!text) throw `Contoh : ${prefix + command} text`
                m.reply(mess.wait)
                await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {
                    asSticker: true
                })

            }
            break
            case 'smeme':
            case 'stickmeme':
            case 'stikmeme':
            case 'stickermeme':
            case 'stikermeme': {
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
                m.reply(mess.wait)
                if (!/image/.test(mime)) throw respond
                if (!text) throw respond
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await quoted.download()
                let {
                    floNime
                } = require('./lib/uploader')
                let fatGans = await floNime(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
                let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(FaTiH)
            }
            break
            case 'simih':
            case 'simisimi': {
                if (!text) throw `Contoh : ${prefix + command} text`
                hm = await fetchJson(api('zenz', '/api/simisimi', {
                    text: text
                }, 'apikey'))
                m.reply(hm.result.message)
            }
            break
            case 'gitstalk':
            case 'ghstalk':
            case 'githubstalk': {
                if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nContoh : ${prefix + command} Abuzzpoet`
                y = await fetchJson(`https://api.github.com/users/${text}`)
                let teks = `*Stalk Github*\n\n• Username : ${y.login}\n• Id : ${y.id}\n• Node Id : ${y.node_id}\n• Type : ${y.type}\n• Name : ${y.name}\n• Company : ${y.company}\n• Blog : ${y.blog}\n• Location : ${y.location}\n• Email : ${y.email}\n• Bio : ${y.bio}\n• Public Repo(s) : ${y.public_repos}\n• Public Gist(s) : ${y.public_gists}\n• Followers : ${y.followers}\n• Following : ${y.following}\n• Created At : ${moment(y.created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n• Updated At : ${moment(y.updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}`
                let ghs = [

                    {

                        "urlButton": {

                            "displayText": `Profile`,

                            "url": `https://github.com/${y.login}`

                        }

                    }

                ]

                buf = await getBuffer(y.avatar_url)

                hisoka.send5ButImg(m.chat, teks, `© ${hisoka.user.name}`, buf, ghs)
            }
            break
            case 'igstalk':
            case 'stalkig': {
                if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nContoh : ${prefix + command} Jokowi`
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: anu.result.photo_profile
                    },
                    caption: `Username : ${anu.result.username}\nFull Name : ${anu.result.fullname}\nFollowers : ${anu.result.followers}\nFollowing : ${anu.result.following}\nBio : ${anu.result.bio}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'tiktokstalk':
            case 'ttstalk':
            case 'stalktiktok': {
                if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nContoh : ${prefix + command} Jes No Limit`
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: anu.result.user_picture
                    },
                    caption: `Username : ${anu.result.username}\nNick Name : ${anu.result.nickname}\nBio : ${anu.result.bio}\nFollowers : ${anu.result.followers}\nFollowings : ${anu.result.followings}\nLikes : ${anu.result.likes}\nVideo : ${anu.result.video}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'stalktwit':
            case 'stalktwitter':
            case 'twitterstalk': {
                if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nContoh : ${prefix + command} Jokowi`
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: anu.result.profile_picture
                    },
                    caption: `Name : ${anu.result.name}\nScreen Name : ${anu.result.screen_name}\nFollowers : ${anu.result.followers}\nFollowing : ${anu.result.following}\nBio : ${anu.result.bio}\nTweet : ${anu.result.tweet}\nDeskripsi : ${anu.result.description}\nJoined : ${anu.result.joined}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'stalker':
            case 'stalk': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id,
                        query2: zone
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
                    db.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Contoh : ${prefix + command} ig cak_haho`
                    let {
                        result: anu
                    } = await fetchJson(api('zenz', '/api/stalker/ig', {
                        username: id
                    }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
                    db.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Contoh : ${prefix + command} npm scrape-primbon`
                    let {
                        result: anu
                    } = await fetchJson(api('zenz', '/api/stalker/npm', {
                        query: id
                    }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
                    db.users[m.sender].limit -= 1
                } else {
                    m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'ssweb':
            case 'sswebfull': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=GuaAbuzz17&url=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: ftroli
                    })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let {
                    webp2mp4File
                } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: ftroli
                })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let {
                    toAudio
                } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                hisoka.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
            }
            break
            case 'tomp3': {
                if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let {
                    toAudio
                } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                hisoka.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mpeg',
                    fileName: `Convert By ${hisoka.user.name}.mp3`
                }, {
                    quoted: m
                })
            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                hisoka.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let {
                    webp2mp4File
                } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: ftroli
                })
                await fs.unlinkSync(media)
            }
            break
            case 'tourl': {
                m.reply(mess.wait)
                let {
                    UploadFileUgu,
                    webp2mp4File,
                    TelegraPh
                } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg':
            case 'removebg':
            case 'remove-bg': {
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let remobg = require('remove.bg')
                let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
                let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
                hmm = await './src/remobg-' + getRandom('')
                localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
                outputFile = await './src/hremo-' + getRandom('.png')
                m.reply(mess.wait)
                remobg.removeBackgroundFromImageFile({
                    path: localFile,
                    apiKey: apinobg,
                    size: "regular",
                    type: "auto",
                    scale: "100%",
                    outputFile
                }).then(async result => {
                    hisoka.sendMessage(m.chat, {
                        image: fs.readFileSync(outputFile),
                        caption: mess.success
                    }, {
                        quoted: m
                    })
                    await fs.unlinkSync(localFile)
                    await fs.unlinkSync(outputFile)
                })
            }
            break
            case 'wasted':
            case 'fisheye':
            case 'invert':
            case 'pixelate':
            case 'roundimage':
            case 'pencil':
            case 'triggered': {
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
                m.reply(mess.wait)
                mee = await hisoka.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.lolhuman.xyz/api/editor/${command}?apikey=GuaAbuzz17&img=${mem}`
                memek = await hisoka.sendImageAsSticker(m.chat, meme, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(memek)
            }
            break
            case '1977':
            case 'aden':
            case 'clarendon':
            case 'gingham':
            case 'hudson':
            case 'inkwell':
            case 'earlybird':
            case 'kelvin':
            case 'lark':
            case 'lofi':
            case 'maven':
            case 'mayfair':
            case 'moon':
            case 'nashville':
            case 'perpetua':
            case 'reyes':
            case 'rise':
            case 'slumber':
            case 'stinson':
            case 'toaster':
            case 'valencia':
            case 'walden':
            case 'willow':
            case 'xpro2': {
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
                m.reply(mess.wait)
                mee = await hisoka.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.lolhuman.xyz/api/filter/${command}?apikey=GuaAbuzz17&img=${mem}`
                memek = await hisoka.sendImageAsSticker(m.chat, meme, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(memek)
            }
            break
            case 'jail':
            case 'rainbow':
            case 'rip':
            case 'sepia':
            case 'wanted':
            case 'trigger': {
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
                m.reply(mess.wait)
                mee = await hisoka.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.lolhuman.xyz/api/creator1/${command}?apikey=GuaAbuzz17&img=${mem}`
                memek = await hisoka.sendImageAsSticker(m.chat, meme, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(memek)
            }
            break
            case 'yts':
            case 'ytsearch': {
                if (!text) throw `Contoh : ${prefix + command} Story Wa Anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: search.all[0].thumbnail
                    },
                    caption: teks
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'google': {
                if (!text) throw `Contoh : ${prefix + command} Tutorial Membuat Bot WhatsApp`
                m.reply(mess.wait)
                let google = require('google-it')
                google({
                    'query': text
                }).then(res => {
                    let teks = `Google Search From : ${text}\n\n`
                    for (let g of res) {
                        teks += `⭔ *Title* : ${g.title}\n`
                        teks += `⭔ *Description* : ${g.snippet}\n`
                        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    m.reply(teks)
                })
            }
            break
            case 'gimage': {
                if (!text) throw `Contoh : ${prefix + command} Akame`
                m.reply(mess.wait)
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [{
                        buttonId: `gimage ${text}`,
                        buttonText: {
                            displayText: 'Next Image'
                        },
                        type: 1
                    }]
                    let buttonMessage = {
                        image: {
                            url: images
                        },
                        caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`,
                        footer: hisoka.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, {
                        quoted: ftroli
                    })
                })
            }
            break
            case 'play':
            case 'ytplay': {
                if (!text) throw `Contoh : ${prefix + command} Story Wa Anime`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [{
                        buttonId: `ytmp3 ${anu.url}`,
                        buttonText: {
                            displayText: '♫ Audio'
                        },
                        type: 1
                    },
                    {
                        buttonId: `ytmp4 ${anu.url}`,
                        buttonText: {
                            displayText: '► Video'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    image: {
                        url: anu.thumbnail
                    },
                    caption: `
📄 Title : ${anu.title}
🔎 Ext : Search
📀 ID : ${anu.videoId}
⏳ Duration : ${anu.timestamp}
👁️ Viewers : ${anu.views}
📤 Upload At : ${anu.ago}
👨‍🎤 Author : ${anu.author.name}
💻 Channel : ${anu.author.url}
💬 Description : ${anu.description}
🔗 Url : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'ytmp3':
            case 'ytaudio': {
                let {
                    yta
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                hisoka.sendImage(m.chat, media.thumb, `📄 Judul : ${media.title}\n🎚️ Ukuran File : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: media.dl_link
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${media.title}.mp3`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'ytmp4':
            case 'ytvideo': {
                let {
                    ytv
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                hisoka.sendMessage(m.chat, {
                    video: {
                        url: media.dl_link
                    },
                    mimetype: 'video/mp4',
                    fileName: `${media.title}.mp4`,
                    caption: `📄 Judul : ${media.title}\n🎚️ Ukuran File : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP4\n📮 Resolusi : ${args[1] || '360p'}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'getmusic': {
                let {
                    yta
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                m.reply(mess.wait)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: media.dl_link
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${media.title}.mp3`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'getvideo': {
                let {
                    ytv
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                m.reply(mess.wait)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                hisoka.sendMessage(m.chat, {
                    video: {
                        url: media.dl_link
                    },
                    mimetype: 'video/mp4',
                    fileName: `${media.title}.mp4`,
                    caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
                let {
                    pinterest
                } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: result
                    },
                    caption: '⭔ Media Url : ' + result
                }, {
                    quoted: ftroli
                })
            }
            break
            // Anime/Wibu
            case 'waifu': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/waifu?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Waifu`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'husbu': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/husbu?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Husbu`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'neko': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/neko?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Neko`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'shinobu': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/shinobu?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Shinobu`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'megumin': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/megumin?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Megumin`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'uniform': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/uniform?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Uniform`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'maid': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/maid?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Maid`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'kitagawa': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/marin-kitagawa?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Marin Kitagawa`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'calliope': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/mori-calliope?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Mori Calliope`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'raiden': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/raiden-shogun?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Raiden Shogun`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'oppai': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/oppai?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Oppai`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'selfies': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/random/selfies?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Selfies`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'cosplay': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/randomimg/cosplay'
                    },
                    caption: `Random Image Cosplay`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'loli': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/randomimg/loli'
                    },
                    caption: `Random Image Loli`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'elf': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.lolhuman.xyz/api/random/elf?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Elf`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'sagiri': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.lolhuman.xyz/api/random/sagiri?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Sagiri`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'elaina': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.lolhuman.xyz/api/random/elaina?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Elaina`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'kanna': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.lolhuman.xyz/api/random/kanna?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Kanna`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            //NSFW
            case 'ahegao': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/ahegao?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'ass': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/ass?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'bdsm': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/bdsm?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'blowjob': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/blowjob?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'cuckold': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/cuckold?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'cum': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/cum?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'ero': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/ero?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'fendom': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/fendom?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'foot': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/foot?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'gangbang': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/gangbang?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'glasses': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/glasses?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'hentai': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/hentai?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'jahy': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/jahy?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'masturbation': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/masturbation?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'orgy': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/orgy?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'panties': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/panties?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'pussy': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/pussy?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'tentacles': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/tentacles?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'thighs': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/thighs?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'yuri': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/yuri?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'zettairyouiki': {
                if (m.isGroup) throw mess.private
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 2 // -2 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://zenzapis.xyz/api/morensfw/zettairyouiki?apikey=GuaAbuzz17'
                    },
                    caption: `Astaghfirullah Tobat Kak`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            // Meme
            case 'meme': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/randomimg/meme'
                    },
                    caption: `Random Image Meme`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'darkjokes': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/randomimg/darkjokes'
                    },
                    caption: `Random Image Darkjokes`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'darkmeme': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://hardianto.xyz/api/darkmeme?apikey=hardianto'
                    },
                    caption: `Random Image Darkmeme`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'memeindo': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.lolhuman.xyz/api/meme/memeindo?apikey=GuaAbuzz17'
                    },
                    caption: `Random Image Memeindo`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            // Sticker Gif/Biasa
            case 'patrick':
            case 'dadu':
            case 'amongus':
            case 'gawrgura':
            case 'anjing':
            case 'bucinstick': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    sticker: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: m
                })
            }
            break
            // Sertifikat Tanah Rumah Lu akaoakka
            case 'toloserti':
            case 'fuckboy':
            case 'fuckgirl':
            case 'bucinserti':
            case 'goodboy':
            case 'goodgirl':
            case 'badboy':
            case 'badgirl': {
                if (!text) throw `Contoh : ${prefix + command} ${pushname} Tolol`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=GuaAbuzz17&name=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break

            case 'pacarserti': {
                if (!text) throw `Contoh : ${prefix + command} Teks1: ${pushname} Teks2: ${pushmame} `
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=GuaAbuzz17&name1=${text}&name2=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: ftroli
                })
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'coffe':
            case 'kopi': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `coffe`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://coffee.alexflipnote.dev/random'
                    },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
                let {
                    wallpaper
                } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                    buttonId: `wallpaper ${text}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: result.image[0]
                    },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
                let {
                    wikimedia
                } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                    buttonId: `wikimedia ${text}`,
                    buttonText: {
                        displayText: 'Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: result.image
                    },
                    caption: `📄 Judul : ${result.title}\n📬 Sumber : ${result.source}\n🔗 Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'quotesanime':
            case 'quoteanime': {
                let {
                    quotesAnime
                } = require('./lib/scraper')
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                    buttonId: `quotesanime`,
                    buttonText: {
                        displayText: 'Next'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'animequotes': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://zenzapis.xyz/randomtext/animequotes2?apikey=GuaAbuzz17`)
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: `~_${anu.result.quotes}_\n\nBy '${anu.result.character}', ${anu.result.anime}\n\n- ${anu.result.episode}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'motivasi':
            case 'dilanquote':
            case 'bucinquote':
            case 'katasenja':
            case 'randomquote':
            case 'muslimquote':
            case 'galauquote':
            case 'kanyequote':
            case 'trumpquote':
            case 'trumpthink':
            case 'creepyfact':
            case 'faktaunik':
            case 'puisi':
            case 'pantun': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(api('zenz', '/randomtext/' + command, {}, 'apikey'))
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'cerpen': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(api('zenz', '/randomtext/' + command, {}, 'apikey'))
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: `Judul : ${anu.result.Judul}\nPenulis : ${anu.result.Penulis}\n\n${anu.result.cerita}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case '3dchristmas':
            case '3ddeepsea':
            case 'americanflag':
            case '3dscifi':
            case '3drainbow':
            case '3dwaterpipe':
            case 'halloweenskeleton':
            case 'sketch':
            case 'bluecircuit':
            case 'space':
            case 'metallic':
            case 'fiction':
            case 'greenhorror':
            case 'transformer':
            case 'berry':
            case 'thunder':
            case 'magma':
            case '3dcrackedstone':
            case '3dneonlight':
            case 'impressiveglitch':
            case 'naturalleaves':
            case 'fireworksparkle':
            case 'matrix':
            case 'dropwater':
            case 'harrypotter':
            case 'foggywindow':
            case 'neondevils':
            case 'christmasholiday':
            case '3dgradient':
            case 'blackpink':
            case 'gluetext': {
                if (!text) throw `Contoh : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: api('zenz', '/textpro/' + command, {
                            text: text
                        }, 'apikey')
                    },
                    caption: `Text Pro ${command}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case '3d-effect':
            case '3d-rubystone':
            case '3d-text-sub-zombie':
            case '3dengraved':
            case '3dgold':
            case '3dgolden':
            case '3dgradient':
            case '3dgradient':
            case '3dlove':
            case '3dluxury':
            case '3dneonlight':
            case '3dpapercut':
            case '3drainbow':
            case '3drealistic':
            case '3drosegold':
            case '3dscifi':
            case '3dsilver':
            case '3dspace':
            case '3dstone':
            case '3dtext-effect':
            case '3dunderwater':
            case '3dvintage':
            case '3dwaterpipe':
            case 'alice-league-of-kings':
            case 'angel-wing-galaxy':
            case 'anubis':
            case 'arch-crossfire':
            case 'art-shader':
            case 'assassins-creed':
            case 'avengers':
            case 'azzenka-league-of-kings':
            case 'balloons-cards':
            case 'balloons-love':
            case 'bearlogo':
            case 'bg-crossfire':
            case 'birthday-cake':
            case 'birthday-cards':
            case 'birthday-greeting':
            case 'birthday-roses':
            case 'black-metal':
            case 'blood-frosted':
            case 'blood-text':
            case 'blue-effect':
            case 'blue-glitter':
            case 'brickwall':
            case 'brokentext':
            case 'bulb-effect':
            case 'bubble-effect': {
                if (!text) throw `Contoh : ${prefix + command} GuaAbuzz`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.violetics.pw/api/textpro/${command}?apikey=4c11-fe88-dbc3&text=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'shadow':
            case 'cup':
            case 'cup1':
            case 'burnpaper':
            case 'lovemessage':
            case 'undergrass':
            case 'woodheart':
            case 'woodenboard':
            case 'wolfmetal':
            case 'nature3d':
            case 'underwater':
            case 'golderrose':
            case 'fallleaves':
            case 'flamming':
            case 'harrypotter': {
                if (!text) throw `Contoh : ${prefix + command} GuaAbuzz`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=GuaAbuzz17&text=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case '1917':
            case '3d-crack-text-effect-online':
            case '3d-underwater':
            case '3d-wood':
            case '3d-wood2':
            case '3damerican-flag':
            case '3dgalaxy-metal':
            case '3dgold':
            case '3dgradient':
            case '3dgradient2':
            case '3dmetal-effect':
            case '3dmetal-text-':
            case '3dmulticolor-papercut':
            case '3dpig-gif':
            case '3drose-gold':
            case '3druby-stone':
            case '3dsand-engraved':
            case '3dshiny-metallic':
            case '3dsilver':
            case '3dspace':
            case '3dsparkle-christmas':
            case '3dstone':
            case '3dsub-zombie':
            case '3dtext-effect':
            case '3dtext-effect2':
            case '3dtext-effect3':
            case '3dtext-pig':
            case '3dvalentine-cards':
            case '3dvintage-light-bulb':
            case '3dxmas-cards':
            case '3dxmas-cards2':
            case '83day-card':
            case '83day-card2':
            case '83day-card3':
            case '83day-card4':
            case 'advanced-glow':
            case 'ahri-league-of-legends':
            case 'alice-league-of-kings':
            case 'amily-arena-of-valor':
            case 'angels-wings':
            case 'anonymous-neon':
            case 'art-shader':
            case 'avengers':
            case 'azzenka-league-of-kings':
            case 'balloon-noel':
            case 'balloon-text':
            case 'balloons-cards':
            case 'balloons-love':
            case 'bats-halloween': {
                if (!text) throw `Contoh : ${prefix + command} GuaAbuzz`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=4c11-fe88-dbc3&text=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'ffcover':
            case 'crossfire':
            case 'galaxy':
            case 'glass':
            case 'neon':
            case 'beach':
            case 'blackpink':
            case 'igcertificate':
            case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, {
                    image: {
                        url: api('zenz', '/ephoto/' + command, {
                            text: text
                        }, 'apikey')
                    },
                    caption: `Ephoto ${command}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'wetglass':
            case 'multicolor3d':
            case 'watercolor':
            case 'luxurygold':
            case 'galaxywallpaper':
            case 'lighttext':
            case 'beautifulflower':
            case 'royaltext':
            case 'heartshaped':
            case 'birdhdaycake':
            case 'galaxystyle':
            case 'hologram3d':
            case 'greenneon':
            case 'glossychrome':
            case 'greenbush':
            case 'metallogo':
            case 'neoltext':
            case 'glittergold':
            case 'textcake':
            case 'startsnight':
            case 'wooden3d':
            case 'textbyname':
            case 'writegalacy':
            case 'galaxybat':
            case 'snow3d':
            case 'birthdayday':
            case 'silverplaybutton':
            case 'cartoongravity':
            case 'anonymhacker':
            case 'mlwall':
            case 'pubgmaskot':
            case 'aovwall':
            case 'logogaming':
            case 'fpslogo':
            case 'avatarlolnew':
            case 'lolbanner':
            case 'avatardota': {
                if (!text) throw `Contoh : ${prefix + command} GuaAbuzz`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=GuaAbuzz17&text=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'juventusshirt':
            case 'cutegravity':
            case 'realvintage':
            case 'codwarzone': {
                if (!text) throw `Contoh : ${prefix + command} GuaAbuzz`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=GuaAbuzz17&text1=${text}&text2=${text}`)
                hisoka.sendMessage(m.chat, {
                    image: anu,
                    caption: `Nih  Kak`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'nomerhoki':
            case 'nomorhoki': {
                if (!Number(text)) throw `Contoh : ${prefix + command} 6289636827083`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi':
            case 'tafsirmimpi': {
                if (!text) throw `Contoh : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh':
            case 'ramaljodoh': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali':
            case 'ramaljodohbali': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta':
            case 'ramalcinta': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama':
            case 'cocoknama': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan':
            case 'cocokpasangan':
            case 'pasangan': {
                if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan':
            case 'jadiannikah': {
                if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext) throw `Contoh : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki':
            case 'rezeki': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan':
            case 'kerja': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib':
            case 'ramalnasib':
            case 'nasib': {
                if (!text) throw `Contoh : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit':
            case 'penyakit': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot':
            case 'tarot': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar':
            case 'taliwangke': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas':
            case 'harisial': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari':
            case 'harinaga': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki':
            case 'arahrezeki': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton':
            case 'wetonjawa': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat':
            case 'karakter': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak':
            case 'zodiac': {
                if (!text) throw `Contoh : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_, _d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])

                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
            case 'tiktok':
            case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', {
                    url: text
                }, 'apikey'))
                let buttons = [{
                        buttonId: `tiktokwm ${text}`,
                        buttonText: {
                            displayText: '► With Watermark'
                        },
                        type: 1
                    },
                    {
                        buttonId: `tiktokmp3 ${text}`,
                        buttonText: {
                            displayText: '♫ Audio'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    video: {
                        url: anu.result.nowatermark
                    },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'tiktokwm':
            case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', {
                    url: text
                }, 'apikey'))
                let buttons = [{
                        buttonId: `tiktoknowm ${text}`,
                        buttonText: {
                            displayText: '► No Watermark'
                        },
                        type: 1
                    },
                    {
                        buttonId: `tiktokmp3 ${text}`,
                        buttonText: {
                            displayText: '♫ Audio'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    video: {
                        url: anu.result.watermark
                    },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'tiktokmp3':
            case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', {
                    url: text
                }, 'apikey'))
                let buttons = [{
                        buttonId: `tiktoknowm ${text}`,
                        buttonText: {
                            displayText: '► No Watermark'
                        },
                        type: 1
                    },
                    {
                        buttonId: `tiktokwm ${text}`,
                        buttonText: {
                            displayText: '► With Watermark'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: anu.result.audio
                    },
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: msg
                })
            }
            break
            case 'instagram':
            case 'ig':
            case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', {
                        url: isUrl(text)[0]
                    }, 'apikey'))
                    for (let media of anu) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', {
                        url: isUrl(text)[0]
                    }, 'apikey'))
                    hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox':
            case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', {
                    query: text
                }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `➣ Title : ${anu.result.lagu}\n➣ Album : ${anu.result.album}\n➣ Singer : ${anu.result.penyanyi}\n➣ Publish : ${anu.result.publish}\n➣ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: anu.result.mp4aLink
                    },
                    mimetype: 'audio/mpeg',
                    fileName: anu.result.lagu + '.m4a'
                }, {
                    quoted: msg
                })
            }
            break
            case 'soundcloud':
            case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', {
                    url: isUrl(text)[0]
                }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `➣ Title : ${anu.result.title}\n➣ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: anu.result.url
                    },
                    mimetype: 'audio/mpeg',
                    fileName: anu.result.title + '.m4a'
                }, {
                    quoted: msg
                })
            }
            break
            case 'twitdl':
            case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', {
                    url: text
                }, 'apikey'))
                let buttons = [{
                    buttonId: `twittermp3 ${text}`,
                    buttonText: {
                        displayText: '► Audio'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    video: {
                        url: anu.result.HD || anu.result.SD
                    },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'twittermp3':
            case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', {
                    url: text
                }, 'apikey'))
                let buttons = [{
                    buttonId: `twitter ${text}`,
                    buttonText: {
                        displayText: '► Video'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: anu.result.thumb
                    },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: anu.result.audio
                    }
                }, {
                    quoted: msg
                })
            }
            break
            case 'fbdl':
            case 'fb':
            case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', {
                    url: text
                }, 'apikey'))
                hisoka.sendMessage(m.chat, {
                    video: {
                        url: anu.result.url
                    },
                    caption: `⭔ Title : ${anu.result.title}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'pindl':
            case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', {
                    url: text
                }, 'apikey'))
                hisoka.sendMessage(m.chat, {
                    video: {
                        url: anu.result
                    },
                    caption: `Download From ${text}`
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'umma':
            case 'ummadl': {
                if (!text) throw `Contoh : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let {
                    umma
                } = require('./lib/scraper')
                let anu = await umma(isUrl(text)[0])
                if (anu.type == 'video') {
                    let buttons = [{
                            buttonId: `ytmp3 ${anu.media[0]} 128kbps`,
                            buttonText: {
                                displayText: '♫ Audio'
                            },
                            type: 1
                        },
                        {
                            buttonId: `ytmp4 ${anu.media[0]} 360p`,
                            buttonText: {
                                displayText: '► Video'
                            },
                            type: 1
                        }
                    ]
                    let buttonMessage = {
                        image: {
                            url: anu.author.profilePic
                        },
                        caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
                        footer: hisoka.user.name,
                        buttons,
                        headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, {
                        quoted: ftroli
                    })
                } else if (anu.type == 'image') {
                    anu.media.map(async (url) => {
                        hisoka.sendMessage(m.chat, {
                            image: {
                                url
                            },
                            caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}`
                        }, {
                            quoted: ftroli
                        })
                    })
                }
            }
            break
            case 'ringtone': {
                if (!text) throw `Contoh : ${prefix + command} black rover`
                let {
                    ringtone
                } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: result.audio
                    },
                    fileName: result.title + '.mp3',
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'groupwhatsapp': {
                if (!text) throw `Contoh : ${prefix + command} Islami`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp?apikey=GuaAbuzz17&query=${text}`)
                resultnya = anu.result
                for (var x of resultnya) {
                    txt = `Nama : ${x.name}\nGenre : ${x.genre}\nLink : ${x.link}`
                }
                m.reply(txt)
            }
            break
            case 'jadwalshalat':
            case 'jadwalsholat': {
                if (!text) throw `Contoh : ${prefix + command} Padang`
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=GuaAbuzz17`)
                txt = `Wilayah : ${anu.result.wilayah}\nSahur : ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nSubuh : ${anu.result.subuh}\nTerbit : ${anu.result.terbit}\nDhuha : ${anu.result.dhuha}\nDzuhur : ${anu.result.dzuhur}\nAshar : ${anu.result.ashar}\nMaghrib : ${anu.result.maghrib}\nIsya : ${anu.result.isya}\nTanggal : ${anu.result.tanggal}`
                m.reply(txt)
            }
            break
            case 'infogempa': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=GuaAbuzz17`)
                txt = `Tanggal/Waktu : ${anu.result.waktu}\nMagnitude : ${anu.result.magnitude}\nKedalaman : ${anu.result.kedalaman}\nKoordinat : ${anu.result.koordinat}\nPotensi : ${anu.result.potensi}\nLokasi Terjadi : ${anu.result.lokasi}`
                m.reply(txt)
            }
            break
            case 'iqra': {
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) throw oh
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                hisoka.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => m.reply(oh))
            }
            break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    m.reply(`Mau format apa ? Contoh : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
                if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
                if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    m.reply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    m.reply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'alquran': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
                hisoka.sendMessage(m.chat, {
                    audio: {
                        url: res.result.data.audio.primary
                    },
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
            }
            break
            case 'tafsirsurah': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
            }
            break
            case 'audio1': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/1?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio2': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/2?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio3': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/3?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio4': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/4?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio5': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/5?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio6': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/6?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio7': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/7?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio8': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/8?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio9': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/9?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'audio10': {
                m.reply(mess.wait)
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/10?apikey=GuaAbuzz17`)
                hisoka.sendMessage(m.chat, {
                    audio: anu,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'hijaber': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/hijaber'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'cecan': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/cecan'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'indonesia': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/indonesia'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'vietnam': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/vietnam'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'thailand': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/thailand'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'korea': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/korea'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'china': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/china'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'jepang': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/japan'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'malaysia': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://api.zacros.my.id/asupan/malaysia'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'santuy': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${prefix}santuy`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    video: {
                        url: 'https://api.zacros.my.id/asupan/santuy'
                    },
                    caption: `Random Asupan ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'ukhty': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${prefix}ukhty`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    video: {
                        url: 'https://api.zacros.my.id/asupan/ukhty'
                    },
                    caption: `Random Asupan Ukhty`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'random': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${prefix}random`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    video: {
                        url: 'https://api.zacros.my.id/asupan/random'
                    },
                    caption: `Random Video Asupan`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'lolivid': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${prefix}lolivid`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    video: {
                        url: 'https://recoders-area.caliph.repl.co/api/lolivid'
                    },
                    caption: `Random Loli ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'tulis':
            case 'nulis': {
                if (args.length < 1) return m.reply('Yang mau di tulis apaan?')
                teks = args.join(' ')
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                nulis = encodeURIComponent(teks)
                res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
                if (res.data.error) return m.reply(res.data.error)
                buff1 = Buffer.from(res.data.result.split(',')[1], 'base64')
                hisoka.sendMessage(m.chat, {
                    image: buff1,
                    caption: 'Nih Kak'
                }, {
                    quoted: ftroli
                }).catch(e => {
                    return m.reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
                })
            }
            break
            case 'asupan': {
                m.reply(mess.wait)
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${prefix}asupan`,
                    buttonText: {
                        displayText: 'Next..'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    video: {
                        url: 'https://api.lolhuman.xyz/api/asupan?apikey=GuaAbuzz17'
                    },
                    caption: `Random ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, {
                    quoted: ftroli
                })
            }
            break
            case 'bass':
            case 'blown':
            case 'deep':
            case 'earrape':
            case 'fast':
            case 'fat':
            case 'nightcore':
            case 'reverse':
            case 'robot':
            case 'slow':
            case 'smooth':
            case 'tupai':
                try {
                    let set
                    if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            hisoka.sendMessage(m.chat, {
                                audio: buff,
                                mimetype: 'audio/mpeg'
                            }, {
                                quoted: ftroli
                            })
                            fs.unlinkSync(ran)
                        })
                    } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                    m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Tidak Ditemukan ❎'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                m.reply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'
                delete global.db.sticker[hash]
                m.reply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, {
                    mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Contoh : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}\n🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                m.reply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            case 'anonymous': {
                if (m.isGroup) throw mess.private
                this.anonymous = this.anonymous ? this.anonymous : {}
                let buttons = [{
                    buttonId: 'start',
                    buttonText: {
                        displayText: 'Start'
                    },
                    type: 1
                }]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
            break
            case 'keluar':
            case 'leave': {
                if (m.isGroup) throw mess.private
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [{
                        buttonId: 'start',
                        buttonText: {
                            displayText: 'Start'
                        },
                        type: 1
                    }]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai':
            case 'start': {
                if (m.isGroup) throw mess.private
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [{
                        buttonId: 'keluar',
                        buttonText: {
                            displayText: 'Stop'
                        },
                        type: 1
                    }]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [{
                            buttonId: 'next',
                            buttonText: {
                                displayText: 'Skip'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'keluar',
                            buttonText: {
                                displayText: 'Stop'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = +new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function(who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function(who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [{
                        buttonId: 'keluar',
                        buttonText: {
                            displayText: 'Stop'
                        },
                        type: 1
                    }]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next':
            case 'lanjut': {
                if (m.isGroup) throw mess.private
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [{
                        buttonId: 'start',
                        buttonText: {
                            displayText: 'Start'
                        },
                        type: 1
                    }]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [{
                            buttonId: 'next',
                            buttonText: {
                                displayText: 'Skip'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'keluar',
                            buttonText: {
                                displayText: 'Stop'
                            },
                            type: 1
                        }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = +new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function(who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function(who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [{
                        buttonId: 'keluar',
                        buttonText: {
                            displayText: 'Stop'
                        },
                        type: 1
                    }]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                hisoka.public = true
                m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
            }
            break
            case 'self': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Mengubah Mode Bot Menjadi Self')
            }
            break
            case 'apikey':
                m.reply(`Apikey Yang Dipake Oleh Bot ${global.namabot}\n⬣ https://zenzapis.xyz [Sewa]\n⬣ https://api.lolhuman.xyz [Sewa]\n⬣ https://api.zacros.my.id [Gratis]`)
                break
            case 'ping':
            case 'botstatus':
            case 'statusbot':
            case 'infobot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                let txtping = `*⍢⃝🤖 I N F O  B O T*\n\n`
                txtping += `*👤 Owner Name :* ${global.namaowner}\n`
                txtping += `*🕊️ Nama Bot :* ${global.namabot}\n`
                txtping += `*🔗 Nomor Owner :* wa.me/${global.owner}\n\n`
                txtping += `*⍢⃝👾 I N F O  S T A T I S T I K*\n\n`
                txtping += `*🗃️ Lib :* Baileys Multi Device\n`
                txtping += `*🆎 Tipe :* Nodejs\n`
                txtping += `*📈 STATUS BOT :* ONLINE\n`
                txtping += `*⚡ Speed :* ${latensi.toFixed(4)} Second\n`
                txtping += `*⏰ Runtime :* ${runtime(process.uptime())}\n`
                txtping += `*💻 RAM Server :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n\n`
                txtping += `*⍢⃝🤝 C O N N E C T  W I T H  M E*\n\n`
                txtping += `*🎗️ Github :* ${global.github}\n`
                txtping += `*🎗️ TikTok :* ${global.myweb}\n`
                txtping += `*🎗️ WhatsApp :* wa.me/${global.owner}\n`
                    .trim()
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, txtping, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, txtping, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, txtping, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, txtping, hisoka.user.name, btn)
                }
            }
            break
            case 'speed':
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
            break
            case 'owner':
            case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
            case 'bug':
            case 'report': {
                if (!text) return m.reply(`Mau Lapor Apa?\n\nContoh: ${command} Menu Error`)
                hisoka.sendMessage(`6289636827082@s.whatsapp.net`, {
                    text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}`
                })
                m.reply(`Berhasil Dilaporkan Ke Owner\n\nPastikan Bugnya Valid, Jika Anda Bermain-main Dengan Ini, Gunakan Fitur Ini Lagi Dan Lagi Tanpa Alasan, Anda Pasti Akan Diblokir !`)
            }
            break
            case 'req':
            case 'request': {
                if (!text) return m.reply(`Mau Request Apa?\n\nContoh: ${command} Tambahin Menu Nsfw dong`)
                hisoka.sendMessage(`6289636827082@s.whatsapp.net`, {
                    text: `*Request Feature From:* wa.me/${m.sender.split("@")[0]}
Request Message: ${text}`
                })
                m.reply(`Berhasil Dilaporkan Ke Owner!`)
            }
            break
            case 'anime': {
                if (!text) return m.reply(`Anime apa yang kamu cari??`)
                await m.reply(mess.wait)
                xfarr.Anime(q).then(async data => {
                        let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                        for (let i of data) {
                            txt += `*📫 Title :* ${i.judul}\n`
                            txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                        }
                        let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                        var but = [{
                            urlButton: {
                                displayText: 'TikTok Creator',
                                url: global.myweb
                            }
                        }, {
                            callButton: {
                                displayText: 'Number Phone Owner',
                                phoneNumber: global.owner[0]
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Rules',
                                id: 'rules'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Donasi',
                                id: 'donasi'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Sewabot',
                                id: 'sewabot'
                            }
                        }]
                        await hisoka.send5ButLoc(from, txt, footer, gam, {
                            userJid: m.chat,
                            quoted: ftroli
                        })
                    })
                    .catch((err) => {
                        m.reply(mess.error)
                    })
            }
            break
            case 'character':
            case 'karakter': {
                if (!text) return m.reply(`Karakter Anime Apa yang Anda Cari??`)
                await m.reply(mess.wait)
                xfarr.Character(q).then(async data => {
                        let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                        for (let i of data) {
                            txt += `*📫 Character :* ${i.character}\n`
                            txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                        }
                        let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                        var but = [{
                            urlButton: {
                                displayText: 'TikTok Creator',
                                url: global.myweb
                            }
                        }, {
                            callButton: {
                                displayText: 'Number Phone Owner',
                                phoneNumber: global.owner[0]
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Rules',
                                id: 'rules'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Donasi',
                                id: 'donasi'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Sewabot',
                                id: 'sewabot'
                            }
                        }]
                        await hisoka.send5ButLoc(from, txt, footer, gam, but, {
                            userJid: m.chat,
                            quoted: ftroli
                        })
                    })
                    .catch((err) => {
                        m.reply(mess.error)
                    })
            }
            break
            case 'manga': {
                if (!text) return m.reply(`Manga apa yang kamu cari??`)
                await m.reply(mess.wait)
                xfarr.Manga(`${text}`).then(async data => {
                        let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                        for (let i of data) {
                            txt += `*📫 Title :* ${i.judul}\n`
                            txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                        }
                        let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                        var but = [{
                            urlButton: {
                                displayText: 'TikTok Creator',
                                url: global.myweb
                            }
                        }, {
                            callButton: {
                                displayText: 'Number Phone Owner',
                                phoneNumber: global.owner[0]
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Rules',
                                id: 'rules'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Donasi',
                                id: 'donasi'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'Sewabot',
                                id: 'sewabot'
                            }
                        }]
                        await hisoka.send5ButLoc(from, txt, footer, gam, but, {
                            userJid: m.chat,
                            quoted: ftroli
                        })
                    })
                    .catch((err) => {
                        m.reply(mess.error)
                    })
            }
            break
            case 'gsmarena': {
                if (!text) throw `Contoh : ${prefix + command} samsung`
                let res = await fetchJson(api('zenz', '/webzone/gsmarena', {
                    query: text
                }, 'apikey'))
                let {
                    judul,
                    rilis,
                    thumb,
                    ukuran,
                    type,
                    storage,
                    display,
                    inchi,
                    pixel,
                    videoPixel,
                    ram,
                    chipset,
                    batrai,
                    merek_batre,
                    detail
                } = res.result
                let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
                hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
                if (!text) throw `Contoh: ${prefix + command} jakarta`
                let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', {
                    kota: text
                }, 'apikey'))
                let capt = `Jadwal Bioskop From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Thumbnail: ${i.thumb}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
                let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
                let capt = `Now Playing Bioskop\n\n`
                for (let i of res.result) {
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
                if (!text) throw `Contoh: ${prefix + command} free fire`
                let res = await fetchJson(api('zenz', '/webzone/amino', {
                    query: text
                }, 'apikey'))
                let capt = `Amino Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Community: ${i.community}\n`
                    capt += `⭔ Community Link: ${i.community_link}\n`
                    capt += `⭔ Thumbnail: ${i.community_thumb}\n`
                    capt += `⭔ Description: ${i.community_desc}\n`
                    capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, 'https://' + res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
                if (!text) throw `Contoh : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/wattpad', {
                    query: text
                }, 'apikey'))
                let {
                    judul,
                    dibaca,
                    divote,
                    bab,
                    waktu,
                    url,
                    thumb,
                    description
                } = res.result[0]
                let capt = `Wattpad From query\n\n`
                capt += `⭔ Judul: ${judul}\n`
                capt += `⭔ Dibaca: ${dibaca}\n`
                capt += `⭔ Divote: ${divote}\n`
                capt += `⭔ Bab: ${bab}\n`
                capt += `⭔ Url: ${url}\n`
                capt += `⭔ Deskripsi: ${description}`
                hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
                if (!text) throw `Contoh : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/webtoons', {
                    query: text
                }, 'apikey'))
                let capt = `Webtoons Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Like: ${i.like}\n`
                    capt += `⭔ Creator: ${i.creator}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                }
                m.reply(capt)
            }
            break
            case 'drakor': {
                if (!text) throw `Contoh : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/drakor', {
                    query: text
                }, 'apikey'))
                let capt = `Drakor Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Years: ${i.years}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
                if (!isCreator) throw mess.owner
                let setbot = db.settings[botNumber]
                if (args[0] === 'templateImage') {
                    setbot.templateImage = true
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateVideo') {
                    setbot.templateImage = false
                    setbot.templateVideo = true
                    setbot.templateGif = false
                    setbot.templateMsg = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateGif') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = true
                    setbot.templateMsg = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateMessage') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = true
                    m.reply(mess.success)
                } else {
                    let sections = [{
                        title: "GANTI MENU BOT",
                        rows: [{
                                title: "Template Image",
                                rowId: `setmenu templateImage`,
                                description: `Ubah Menu Bot Menjadi Gambar`
                            },
                            {
                                title: "Template Video",
                                rowId: `setmenu templateVideo`,
                                description: `Ubah Menu Bot Menjadi Video`
                            },
                            {
                                title: "Template Gif",
                                rowId: `setmenu templateGif`,
                                description: `Ubah Menu Bot Menjadi Gif`
                            },
                            {
                                title: "Template Message",
                                rowId: `setmenu templateMessage`,
                                description: `Ubah Menu Bot Menjadi Pesan`
                            }
                        ]
                    }, ]
                    hisoka.sendListMsg(m.chat, `Silakan pilih menu yang ingin Anda ubah!`, hisoka.user.name, `Hello Owner !`, `Klik disini`, sections, m)
                }
            }
            break
            case 'rules': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 RULES BOT 」
│└─────────────┈❖
│1. Tolong Gunakan Delay 5 Detik
│     Untuk Menggukan BOT.
│2. Gunakan Dengan Bijak.
│3. Don't Call Bot.
│4. Don't Spam Bot.
└┬─────────────┈❖
┌┤「 SNK 」
│└─────────────┈❖
│1. Data Whatsapp Anda Akan Kami
│     Simpan Di Server Kami
│       Selama BOT Aktif.
│2. Data Anda Akan Di Hapus Ketika BOT OFF.
│3. Kami Tidak Menyimpan
│     Gambar/Video/File/Audio/Dokumen
│       Yang Anda Kirim.
│4. Kami Tidak Pernah Meminta Anda
│     Untuk Memberikan Informasi Pribadi.
│5. Jika Menemukan BUG/ERROR
│     Silahkan REPORT!.
└┬─────────────┈❖
┌┤「 ATTENTION 」
│└─────────────┈❖
│*KONSEKUENSI BILA MELANGGAR RULES*
│1. Bot Akan Memblokir Nomor Anda.
│2. Anda Tidak Akan Bisa Mengakses Bot Lagi.
│3. Mengeksploitasi Terhadap bot.
│Sanksi: *PERMANENT BLOCK*
└──────────────┈❖`
                let btn = [{
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'sewa':
            case 'sewabot': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 SEWA BOT 」
│└─────────────┈❖
│⭔ 1 Minggu 5k
│⭔ 1 Bulan 20k
└┬─────────────┈❖
┌┤「 PEMBAYARAN 」
│└─────────────┈❖
│⭔ TELKOMSEL : ${global.telkomsel}
│⭔ XL : ${global.xl}
│⭔ INDOSAT : ${global.indosat}
│⭔ TRI : ${global.tri}
│⭔ SMARTFREN : ${global.smartfren}
│⭔ GOPAY : ${global.gopay}
│⭔ DANA : ${global.dana}
│⭔ OVO : ${global.ovo}
│⭔ SAWERIA : ${global.saweria}
└┬─────────────┈❖
┌┤「 KEUNTUNGAN 」
│└─────────────┈❖
│⭔ On 24 Jam
│⭔ Run Dirpd/Heroku/Oktote
│⭔ Anti Delay
│⭔ Anti Virtex
│⭔ Antilink WA/TT/YT
│⭔ Welcome Image
│⭔ Left
└┬─────────────┈❖
┌┤「 SISTEM 」
│└─────────────┈❖
│⭔ Kirim » Bukti Pembayaran » Bot Join
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'Donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Chat Owner Disini',
                        id: 'owner'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'donasi':
            case 'donate': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 DONASI 」
│└─────────────┈❖
│⭔ TELKOMSEL : ${global.telkomsel}
│⭔ XL : ${global.xl}
│⭔ INDOSAT : ${global.indosat}
│⭔ TRI : ${global.tri}
│⭔ SMARTFREN : ${global.smartfren}
│⭔ GOPAY : ${global.gopay}
│⭔ DANA : ${global.dana}
│⭔ OVO : ${global.ovo}
│⭔ SAWERIA : ${global.saweria}
│⭔ Q.S Az-Zalzalah Ayat 7 :
│
│⭔ فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَه
│
│⭔ Artinya : Maka barangsiapa
│mengerjakan kebaikan seberatzarrah,
│niscaya dia akan melihat
│(balasan)nya.
│
│*Terima Kasih*
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Ping',
                        id: 'ping'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Chat Owner Disini',
                        id: 'owner'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'groupmenu':
            case 'menugroup': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 GROUP 」
│└─────────────┈❖
│⭔ ${prefix}linkgroup
│⭔ ${prefix}revoke
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}antilinkyt [on/off]
│⭔ ${prefix}antilinktt [on/off]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'downloadmenu':
            case 'menudownload': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 DOWNLOADER 」
│└─────────────┈❖
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url] [Resolusi]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'searchmenu':
            case 'menusearch': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 SEARCH 」
│└─────────────┈❖
│⭔ ${prefix}anime [query]
│⭔ ${prefix}manga [query]
│⭔ ${prefix}character [query]
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}groupwhatsapp 
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'stickermenu':
            case 'menusticker': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 STICKER 」
│└─────────────┈❖
│⭔ ${prefix}sticker
│⭔ ${prefix}attp [teks]
│⭔ ${prefix}ttp [teks]
│⭔ ${prefix}emojimix 😎+🤠
│⭔ ${prefix}emojimix2 😎
│⭔ ${prefix}patrick
│⭔ ${prefix}dadu
│⭔ ${prefix}amongus
│⭔ ${prefix}gawrgura
│⭔ ${prefix}anjing
│⭔ ${prefix}bucinstick
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'animemenu':
            case 'menuanime': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ANIME 」
│└─────────────┈❖
│⭔ ${prefix}couple
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}loli
│⭔ ${prefix}elf
│⭔ ${prefix}uniform
│⭔ ${prefix}cosplay
│⭔ ${prefix}maid
│⭔ ${prefix}oppai
│⭔ ${prefix}selfies
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│⭔ ${prefix}sagiri
│⭔ ${prefix}elaina
│⭔ ${prefix}kanna
│⭔ ${prefix}raiden
│⭔ ${prefix}calliope
│⭔ ${prefix}kitagawa
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'nsfwmenu':
            case 'menunsfw': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 NSFW 」
│└─────────────┈❖
│⭔ ${prefix}ahegao
│⭔ ${prefix}ass
│⭔ ${prefix}bdsm
│⭔ ${prefix}blowjob
│⭔ ${prefix}cuckold
│⭔ ${prefix}cum
│⭔ ${prefix}ero
│⭔ ${prefix}fendom
│⭔ ${prefix}foot
│⭔ ${prefix}gangbang
│⭔ ${prefix}glasses
│⭔ ${prefix}hentai
│⭔ ${prefix}jahy
│⭔ ${prefix}masturbation
│⭔ ${prefix}orgy
│⭔ ${prefix}panties
│⭔ ${prefix}pussy
│⭔ ${prefix}tentacles
│⭔ ${prefix}thighs
│⭔ ${prefix}yuri
│⭔ ${prefix}zettairyouiki
│⭔ Noted : Stay Halal Brother >_<
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'asupanmenu':
            case 'menuasupan': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ASUPAN 」
│└─────────────┈❖
│⭔ ${prefix}random
│⭔ ${prefix}santuy
│⭔ ${prefix}ukhty
│⭔ ${prefix}lolivid
│⭔ ${prefix}cecan
│⭔ ${prefix}hijaber
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}vietnam
│⭔ ${prefix}china
│⭔ ${prefix}korea
│⭔ ${prefix}jepang
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'quotesmenu':
            case 'menuquotes': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 QUOTES 」
│└─────────────┈❖
│⭔ ${prefix}quotesanime
│⭔ ${prefix}animequotes
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}randomquote
│⭔ ${prefix}muslimquote
│⭔ ${prefix}galauquote
│⭔ ${prefix}kanyequote
│⭔ ${prefix}trumpquote
│⭔ ${prefix}trumpthink
│⭔ ${prefix}creepyfact
│⭔ ${prefix}faktaunik
│⭔ ${prefix}puisi
│⭔ ${prefix}pantun
│⭔ ${prefix}cerpen
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'mememenu':
            case 'menumeme': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 MEME 」
│└─────────────┈❖
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjokes
│⭔ ${prefix}darkmeme
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'randommenu':
            case 'menurandom': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 RANDOM 」
│└─────────────┈❖
│⭔ ${prefix}simih [teks]
│⭔ ${prefix}apikey
│⭔ ${prefix}coffe
│⭔ ${prefix}infogempa
│⭔ ${prefix}ebinary [teks]
│⭔ ${prefix}dbinary [teks]
│⭔ ${prefix}styletext [teks]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'rpgmenu':
            case 'menurpg': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 RPG 」
│└─────────────┈❖
│⭔ ${prefix}hunt
│⭔ ${prefix}mining
│⭔ ${prefix}heal
│⭔ ${prefix}limit
│⭔ ${prefix}inventory
│⭔ ${prefix}leaderboard
│⭔ ${prefix}buy [option]
│⭔ ${prefix}sell [option]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'sertifikatmenu':
            case 'menusertifikat': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 SERTIFIKAT 」
│└─────────────┈❖
│⭔ ${prefix}toloserti 
│⭔ ${prefix}fuckboy
│⭔ ${prefix}fuckgirl
│⭔ ${prefix}bucinserti
│⭔ ${prefix}goodboy
│⭔ ${prefix}goodgirl
│⭔ ${prefix}badboy
│⭔ ${prefix}badgirl
│⭔ ${prefix}pacarserti
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'textpromenu':
            case 'menutextpro': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 TEXT PRO 」
│└─────────────┈❖
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│⭔ ${prefix}3d-effect 
│⭔ ${prefix}3d-rubystone 
│⭔ ${prefix}3d-text-sub-zombie 
│⭔ ${prefix}3dengraved 
│⭔ ${prefix}3dgold 
│⭔ ${prefix}3dgolden 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dlove 
│⭔ ${prefix}3dluxury 
│⭔ ${prefix}3dneonlight 
│⭔ ${prefix}3dpapercut 
│⭔ ${prefix}3drainbow 
│⭔ ${prefix}3drealistic 
│⭔ ${prefix}3drosegold 
│⭔ ${prefix}3dscifi 
│⭔ ${prefix}3dsilver 
│⭔ ${prefix}3dspace 
│⭔ ${prefix}3dstone 
│⭔ ${prefix}3dtext-effect 
│⭔ ${prefix}3dunderwater 
│⭔ ${prefix}3dvintage 
│⭔ ${prefix}3dwaterpipe 
│⭔ ${prefix}alice-league-of-kings 
│⭔ ${prefix}angel-wing-galaxy 
│⭔ ${prefix}anubis 
│⭔ ${prefix}arch-crossfire 
│⭔ ${prefix}art-shader 
│⭔ ${prefix}assassins-creed 
│⭔ ${prefix}avengers 
│⭔ ${prefix}azzenka-league-of-kings 
│⭔ ${prefix}balloons-cards 
│⭔ ${prefix}balloons-love 
│⭔ ${prefix}bearlogo 
│⭔ ${prefix}bg-crossfire 
│⭔ ${prefix}birthday-cake 
│⭔ ${prefix}birthday-cards 
│⭔ ${prefix}birthday-greeting 
│⭔ ${prefix}birthday-roses 
│⭔ ${prefix}black-metal 
│⭔ ${prefix}blood-frosted 
│⭔ ${prefix}blood-text 
│⭔ ${prefix}blue-effect 
│⭔ ${prefix}blue-glitter 
│⭔ ${prefix}brickwall 
│⭔ ${prefix}brokentext 
│⭔ ${prefix}bulb-effect 
│⭔ ${prefix}bubble-effect 
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'photooxymenu':
            case 'menuphotooxy': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 PHOTO OXY 」
│└─────────────┈❖
│⭔ ${prefix}shadow
│⭔ ${prefix}cup 
│⭔ ${prefix}cup1 
│⭔ ${prefix}burnpaper 
│⭔ ${prefix}lovemessage 
│⭔ ${prefix}undergrass 
│⭔ ${prefix}woodheart
│⭔ ${prefix}woodenboard 
│⭔ ${prefix}wolfmetal 
│⭔ ${prefix}nature3d 
│⭔ ${prefix}underwater 
│⭔ ${prefix}golderrose 
│⭔ ${prefix}fallleaves 
│⭔ ${prefix}flamming 
│⭔ ${prefix}harrypotter
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'photomakermenu':
            case 'menuphotomaker': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 PHOTO MAKER 」
│└─────────────┈❖
│⭔ ${prefix}1917 
│⭔ ${prefix}3d-crack-text-effect-online 
│⭔ ${prefix}3d-underwater 
│⭔ ${prefix}3d-wood 
│⭔ ${prefix}3d-wood2
│⭔ ${prefix}3damerican-flag
│⭔ ${prefix}3dgalaxy-metal 
│⭔ ${prefix}3dgold
│⭔ ${prefix}3dgradient
│⭔ ${prefix}3dgradient2
│⭔ ${prefix}3dmetal-effect
│⭔ ${prefix}3dmetal-text-
│⭔ ${prefix}3dmulticolor-papercut
│⭔ ${prefix}3dpig-gif
│⭔ ${prefix}3drose-gold
│⭔ ${prefix}3druby-stone
│⭔ ${prefix}3dsand-engraved
│⭔ ${prefix}3dshiny-metallic
│⭔ ${prefix}3dsilver
│⭔ ${prefix}3dspace
│⭔ ${prefix}3dsparkle-christmas
│⭔ ${prefix}3dstone
│⭔ ${prefix}3dsub-zombie
│⭔ ${prefix}3dtext-effect
│⭔ ${prefix}3dtext-effect2
│⭔ ${prefix}3dtext-effect3
│⭔ ${prefix}3dtext-pig
│⭔ ${prefix}3dvalentine-cards
│⭔ ${prefix}3dvintage-light-bulb
│⭔ ${prefix}3dxmas-cards
│⭔ ${prefix}3dxmas-cards2
│⭔ ${prefix}83day-card
│⭔ ${prefix}83day-card2
│⭔ ${prefix}83day-card3
│⭔ ${prefix}83day-card4
│⭔ ${prefix}advanced-glow
│⭔ ${prefix}ahri-league-of-legends
│⭔ ${prefix}alice-league-of-kings
│⭔ ${prefix}amily-arena-of-valor
│⭔ ${prefix}angels-wings
│⭔ ${prefix}anonymous-neon
│⭔ ${prefix}art-shader
│⭔ ${prefix}avengers
│⭔ ${prefix}azzenka-league-of-kings
│⭔ ${prefix}balloon-noel
│⭔ ${prefix}balloon-text
│⭔ ${prefix}balloons-cards
│⭔ ${prefix}balloons-love
│⭔ ${prefix}bats-halloween
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'stickerefekmenu':
            case 'menustickerefek': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 STICKER EFEK 」
│└─────────────┈❖
│⭔ ${prefix}wasted
│⭔ ${prefix}fisheye
│⭔ ${prefix}pixelate
│⭔ ${prefix}invert
│⭔ ${prefix}roundimage
│⭔ ${prefix}1977 
│⭔ ${prefix}aden
│⭔ ${prefix}clarendon
│⭔ ${prefix}gingham
│⭔ ${prefix}hudson 
│⭔ ${prefix}inkwell 
│⭔ ${prefix}earlybird 
│⭔ ${prefix}kelvin 
│⭔ ${prefix}lark
│⭔ ${prefix}lofi 
│⭔ ${prefix}maven 
│⭔ ${prefix}mayfair 
│⭔ ${prefix}moon 
│⭔ ${prefix}nashville 
│⭔ ${prefix}perpetua 
│⭔ ${prefix}reyes 
│⭔ ${prefix}rise 
│⭔ ${prefix}slumber 
│⭔ ${prefix}stinson 
│⭔ ${prefix}toaster 
│⭔ ${prefix}valencia 
│⭔ ${prefix}walden 
│⭔ ${prefix}willow 
│⭔ ${prefix}xpro2 
│⭔ ${prefix}pencil
│⭔ ${prefix}triggered
│⭔ ${prefix}trigger
│⭔ ${prefix}jail
│⭔ ${prefix}rainbow
│⭔ ${prefix}rip
│⭔ ${prefix}sepia
│⭔ ${prefix}wanted
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'ephotomenu':
            case 'menuephoto': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 EPHOTO 」
│└─────────────┈❖
│⭔ ${prefix}ffcover [teks]
│⭔ ${prefix}crossfire [teks]
│⭔ ${prefix}galaxy [teks]
│⭔ ${prefix}glass [teks]
│⭔ ${prefix}neon [teks]
│⭔ ${prefix}beach [teks]
│⭔ ${prefix}blackpink [teks]
│⭔ ${prefix}igcertificate [teks]
│⭔ ${prefix}ytcertificate [teks]
│⭔ ${prefix}wetglass [teks]
│⭔ ${prefix}multicolor3d [teks]
│⭔ ${prefix}watercolor [teks]
│⭔ ${prefix}luxurygold [teks]
│⭔ ${prefix}galaxywallpaper [teks]
│⭔ ${prefix}lighttext [teks]
│⭔ ${prefix}beautifulflower [teks]
│⭔ ${prefix}royaltext [teks]
│⭔ ${prefix}heartshaped [teks]
│⭔ ${prefix}birdhdaycake [teks]
│⭔ ${prefix}galaxystyle [teks]
│⭔ ${prefix}hologram3d [teks]
│⭔ ${prefix}greenneon [teks]
│⭔ ${prefix}glossychrome [teks]
│⭔ ${prefix}greenbush [teks]
│⭔ ${prefix}metallogo [teks]
│⭔ ${prefix}neoltext [teks]
│⭔ ${prefix}glittergold [teks]
│⭔ ${prefix}textcake [teks]
│⭔ ${prefix}startsnight [teks]
│⭔ ${prefix}wooden3d [teks]
│⭔ ${prefix}textbyname [teks]
│⭔ ${prefix}writegalacy [teks]
│⭔ ${prefix}galaxybat [teks]
│⭔ ${prefix}snow3d [teks]
│⭔ ${prefix}birthdayday [teks]
│⭔ ${prefix}silverplaybutton [teks]
│⭔ ${prefix}cartoongravity [teks]
│⭔ ${prefix}anonymhacker [teks]
│⭔ ${prefix}mlwall [teks]
│⭔ ${prefix}pubgmaskot [teks]
│⭔ ${prefix}aovwall [teks]
│⭔ ${prefix}logogaming [teks]
│⭔ ${prefix}fpslogo [teks]
│⭔ ${prefix}avatarlolnew [teks]
│⭔ ${prefix}lolbanner [teks]
│⭔ ${prefix}avatardota [teks]
│⭔ ${prefix}juventusshirt [teks]
│⭔ ${prefix}cutegravity [teks]
│⭔ ${prefix}realvintage [teks]
│⭔ ${prefix}codwarzone [teks]
│⭔ ${prefix}valorantbanner [teks]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'gamemenu':
            case 'menugame': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 GAME 」
│└─────────────┈❖
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'primbonmenu':
            case 'menuprimbon': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 PRIMBON 」
│└─────────────┈❖
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'convertmenu':
            case 'menuconvert': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 CONVERT 」
│└─────────────┈❖
│⭔ ${prefix}ssweb [url]
│⭔ ${prefix}removebg [image]
│⭔ ${prefix}nulis [teks]
│⭔ ${prefix}toimage [reply sticker]
│⭔ ${prefix}tovideo [reply sticker]
│⭔ ${prefix}togif [reply sticker]
│⭔ ${prefix}tourl [image / video]
│⭔ ${prefix}tovn [reply vn]
│⭔ ${prefix}tomp3 [reply video]
│⭔ ${prefix}toaudio [reply video]
│
└───────⭓`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'mainmenu':
            case 'menumain': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 MAIN 」
│└─────────────┈❖
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}donasi
│⭔ ${prefix}agamaowner / ${prefix}agamabot
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete / ${prefix}del / ${prefix}d
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}request [req]
│⭔ ${prefix}report [bug]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'databasemenu':
            case 'menudatabase': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 DATABASE 」
│└─────────────┈❖
│⭔ ${prefix}setcmd [reply sticker/pesan]
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd [reply sticker/pesan]
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'anonymousmenu':
            case 'menuanonymous': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ANONYMOUS 」
│└─────────────┈❖
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'islamicmenu':
            case 'menuislamic': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ISLAMIC 」
│└─────────────┈❖
│⭔ ${prefix}jadwalsholat
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}audio1
│⭔ ${prefix}audio2
│⭔ ${prefix}audio3
│⭔ ${prefix}audio4
│⭔ ${prefix}audio5
│⭔ ${prefix}audio6
│⭔ ${prefix}audio7
│⭔ ${prefix}audio8
│⭔ ${prefix}audio9
│⭔ ${prefix}audio10
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'kerangmenu':
            case 'menukerang': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 KERANG 」
│└─────────────┈❖
│⭔ ${prefix}apakah [teks]
│⭔ ${prefix}bisakah [teks]
│⭔ ${prefix}bagaimanakah [teks]
│⭔ ${prefix}rate [teks]
│⭔ ${prefix}kapankah [teks]
│⭔ ${prefix}cekganteng [teks]
│⭔ ${prefix}cekcantik [teks]
│⭔ ${prefix}ceksange [teks]
│⭔ ${prefix}cekgay [teks]
│⭔ ${prefix}ceklesbi [teks]
│⭔ ${prefix}cekmati [teks]
│⭔ ${prefix}wangy [teks]
│⭔ ${prefix}halah [teks]
│⭔ ${prefix}hilih [teks]
│⭔ ${prefix}huluh [teks]
│⭔ ${prefix}heleh [teks]
│⭔ ${prefix}holoh [teks]
│⭔ ${prefix}jadian [teks]
│⭔ ${prefix}jodohku [teks]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'voicemenu':
            case 'menuvoice': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 VOICE CHANGER 」
│└─────────────┈❖
│⭔ ${prefix}bass [reply audio / vn]
│⭔ ${prefix}blown [reply audio / vn]
│⭔ ${prefix}deep [reply audio / vn]
│⭔ ${prefix}earrape [reply audio / vn]
│⭔ ${prefix}fast [reply audio / vn]
│⭔ ${prefix}fat [reply audio / vn]
│⭔ ${prefix}nightcore [reply audio / vn]
│⭔ ${prefix}reverse [reply audio / vn]
│⭔ ${prefix}robot [reply audio / vn]
│⭔ ${prefix}slow [reply audio / vn]
│⭔ ${prefix}tupai [reply audio / vn]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'stalkmenu':
            case 'menustalk': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 STALK 」
│└─────────────┈❖
│⭔ ${prefix}githubstalk
│⭔ ${prefix}stalkig
│⭔ ${prefix}stalktiktok
│⭔ ${prefix}twitterstalk
│⭔ ${prefix}stalk [option] [query]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'ownermenu':
            case 'menuowner': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 OWNER 」
│└─────────────┈❖
│⭔ ${prefix}myip
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}setexif
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}bcallmedia
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setmenu [option]
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'webzonemenu':
            case 'menuwebzone': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 WEBZONE 」
│└─────────────┈❖
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'list':
            case 'menu':
            case 'help':
            case '?': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│• Library : *Baileys-MD*.
│• Prefix : ( ${prefix} )
│• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│• Menuju idul Adha :
│   ${menuju}
│• Wib : ${wib}
│• Wita : ${wita}
│• Wit : ${wit}
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'List Menu',
                        id: 'command'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            case 'allmenu':
            case 'menuall': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.users).length}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju idul Adha :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ANONYMOUS 」
│└─────────────┈❖
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
└┬─────────────┈❖
┌┤「 ANIME 」
│└─────────────┈❖
│⭔ ${prefix}couple
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}loli
│⭔ ${prefix}elf
│⭔ ${prefix}uniform
│⭔ ${prefix}cosplay
│⭔ ${prefix}maid
│⭔ ${prefix}oppai
│⭔ ${prefix}selfies
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│⭔ ${prefix}sagiri
│⭔ ${prefix}elaina
│⭔ ${prefix}kanna
│⭔ ${prefix}raiden
│⭔ ${prefix}calliope
│⭔ ${prefix}kitagawa
└┬─────────────┈❖
┌┤「 ASUPAN 」
│└─────────────┈❖
│⭔ ${prefix}random
│⭔ ${prefix}santuy
│⭔ ${prefix}ukhty
│⭔ ${prefix}lolivid
│⭔ ${prefix}cecan
│⭔ ${prefix}hijaber
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}vietnam
│⭔ ${prefix}china
│⭔ ${prefix}korea
│⭔ ${prefix}jepang
└┬─────────────┈❖
┌┤「 CONVERT 」
│└─────────────┈❖
│⭔ ${prefix}ssweb [url]
│⭔ ${prefix}removebg [image]
│⭔ ${prefix}nulis [teks]
│⭔ ${prefix}toimage [reply sticker]
│⭔ ${prefix}tovideo [reply sticker]
│⭔ ${prefix}togif [reply sticker]
│⭔ ${prefix}tourl [image / video]
│⭔ ${prefix}tovn [reply vn]
│⭔ ${prefix}tomp3 [reply video]
│⭔ ${prefix}toaudio [reply video]
└┬─────────────┈❖
┌┤「 DOWNLOADER 」
│└─────────────┈❖
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url] [Resolusi]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
└┬─────────────┈❖
┌┤「 DATABASE 」
│└─────────────┈❖
│⭔ ${prefix}setcmd [reply sticker/pesan]
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd [reply sticker/pesan]
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
└┬─────────────┈❖
┌┤「 EPHOTO 」
│└─────────────┈❖
│⭔ ${prefix}ffcover [teks]
│⭔ ${prefix}crossfire [teks]
│⭔ ${prefix}galaxy [teks]
│⭔ ${prefix}glass [teks]
│⭔ ${prefix}neon [teks]
│⭔ ${prefix}beach [teks]
│⭔ ${prefix}blackpink [teks]
│⭔ ${prefix}igcertificate [teks]
│⭔ ${prefix}ytcertificate [teks]
│⭔ ${prefix}wetglass [teks]
│⭔ ${prefix}multicolor3d [teks]
│⭔ ${prefix}watercolor [teks]
│⭔ ${prefix}luxurygold [teks]
│⭔ ${prefix}galaxywallpaper [teks]
│⭔ ${prefix}lighttext [teks]
│⭔ ${prefix}beautifulflower [teks]
│⭔ ${prefix}royaltext [teks]
│⭔ ${prefix}heartshaped [teks]
│⭔ ${prefix}birdhdaycake [teks]
│⭔ ${prefix}galaxystyle [teks]
│⭔ ${prefix}hologram3d [teks]
│⭔ ${prefix}greenneon [teks]
│⭔ ${prefix}glossychrome [teks]
│⭔ ${prefix}greenbush [teks]
│⭔ ${prefix}metallogo [teks]
│⭔ ${prefix}neoltext [teks]
│⭔ ${prefix}glittergold [teks]
│⭔ ${prefix}textcake [teks]
│⭔ ${prefix}startsnight [teks]
│⭔ ${prefix}wooden3d [teks]
│⭔ ${prefix}textbyname [teks]
│⭔ ${prefix}writegalacy [teks]
│⭔ ${prefix}galaxybat [teks]
│⭔ ${prefix}snow3d [teks]
│⭔ ${prefix}birthdayday [teks]
│⭔ ${prefix}silverplaybutton [teks]
│⭔ ${prefix}cartoongravity [teks]
│⭔ ${prefix}anonymhacker [teks]
│⭔ ${prefix}mlwall [teks]
│⭔ ${prefix}pubgmaskot [teks]
│⭔ ${prefix}aovwall [teks]
│⭔ ${prefix}logogaming [teks]
│⭔ ${prefix}fpslogo [teks]
│⭔ ${prefix}avatarlolnew [teks]
│⭔ ${prefix}lolbanner [teks]
│⭔ ${prefix}avatardota [teks]
│⭔ ${prefix}juventusshirt [teks]
│⭔ ${prefix}cutegravity [teks]
│⭔ ${prefix}realvintage [teks]
│⭔ ${prefix}codwarzone [teks]
│⭔ ${prefix}valorantbanner [teks]
└┬─────────────┈❖
┌┤「 GROUP 」
│└─────────────┈❖
│⭔ ${prefix}linkgroup
│⭔ ${prefix}revoke
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}antilinkwa [on/off]
│⭔ ${prefix}antilinkyt [on/off]
│⭔ ${prefix}antilinktt [on/off]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
└┬─────────────┈❖
┌┤「 GAME 」
│└─────────────┈❖
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
└┬─────────────┈❖
┌┤「 ISLAMIC 」
│└─────────────┈❖
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}audio1
│⭔ ${prefix}audio2
│⭔ ${prefix}audio3
│⭔ ${prefix}audio4
│⭔ ${prefix}audio5
│⭔ ${prefix}audio6
│⭔ ${prefix}audio7
│⭔ ${prefix}audio8
│⭔ ${prefix}audio9
│⭔ ${prefix}audio10
└┬─────────────┈❖
┌┤「 KERANG 」
│└─────────────┈❖
│⭔ ${prefix}apakah [teks]
│⭔ ${prefix}bisakah [teks]
│⭔ ${prefix}bagaimanakah [teks]
│⭔ ${prefix}rate [teks]
│⭔ ${prefix}kapankah [teks]
│⭔ ${prefix}cekganteng [teks]
│⭔ ${prefix}cekcantik [teks]
│⭔ ${prefix}ceksange [teks]
│⭔ ${prefix}cekgay [teks]
│⭔ ${prefix}ceklesbi [teks]
│⭔ ${prefix}cekmati [teks]
│⭔ ${prefix}wangy [teks]
│⭔ ${prefix}halah [teks]
│⭔ ${prefix}hilih [teks]
│⭔ ${prefix}huluh [teks]
│⭔ ${prefix}heleh [teks]
│⭔ ${prefix}holoh [teks]
│⭔ ${prefix}jadian [teks]
│⭔ ${prefix}jodohku [teks]
└┬─────────────┈❖
┌┤「 MEME 」
│└─────────────┈❖
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjokes
│⭔ ${prefix}darkmeme
└┬─────────────┈❖
┌┤「 MAIN 」
│└─────────────┈❖
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}donasi
│⭔ ${prefix}agamaowner / ${prefix}agamabot
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete / ${prefix}del / ${prefix}d
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}request [req]
│⭔ ${prefix}report [bug]
└┬─────────────┈❖
┌┤「 NSFW 」
│└─────────────┈❖
│⭔ ${prefix}ahegao
│⭔ ${prefix}ass
│⭔ ${prefix}bdsm
│⭔ ${prefix}blowjob
│⭔ ${prefix}cuckold
│⭔ ${prefix}cum
│⭔ ${prefix}ero
│⭔ ${prefix}fendom
│⭔ ${prefix}foot
│⭔ ${prefix}gangbang
│⭔ ${prefix}glasses
│⭔ ${prefix}hentai
│⭔ ${prefix}jahy
│⭔ ${prefix}masturbation
│⭔ ${prefix}orgy
│⭔ ${prefix}panties
│⭔ ${prefix}pussy
│⭔ ${prefix}tentacles
│⭔ ${prefix}thighs
│⭔ ${prefix}yuri
│⭔ ${prefix}zettairyouiki
│⭔ Noted : Stay Halal Brother >_<
└┬─────────────┈❖
┌┤「 OWNER 」
│└─────────────┈❖
│⭔ ${prefix}myip
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}setexif [packname|author]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}bcallmedia  [image / video]
│⭔ ${prefix}setppbot [image]
└┬─────────────┈❖
┌┤「 PRIMBON 」
│└─────────────┈❖
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
└┬─────────────┈❖
┌┤「 PHOTO MAKER 」
│└─────────────┈❖
│⭔ ${prefix}1917 
│⭔ ${prefix}3d-crack-text-effect-online 
│⭔ ${prefix}3d-underwater 
│⭔ ${prefix}3d-wood 
│⭔ ${prefix}3d-wood2
│⭔ ${prefix}3damerican-flag
│⭔ ${prefix}3dgalaxy-metal 
│⭔ ${prefix}3dgold
│⭔ ${prefix}3dgradient
│⭔ ${prefix}3dgradient2
│⭔ ${prefix}3dmetal-effect
│⭔ ${prefix}3dmetal-text-
│⭔ ${prefix}3dmulticolor-papercut
│⭔ ${prefix}3dpig-gif
│⭔ ${prefix}3drose-gold
│⭔ ${prefix}3druby-stone
│⭔ ${prefix}3dsand-engraved
│⭔ ${prefix}3dshiny-metallic
│⭔ ${prefix}3dsilver
│⭔ ${prefix}3dspace
│⭔ ${prefix}3dsparkle-christmas
│⭔ ${prefix}3dstone
│⭔ ${prefix}3dsub-zombie
│⭔ ${prefix}3dtext-effect
│⭔ ${prefix}3dtext-effect2
│⭔ ${prefix}3dtext-effect3
│⭔ ${prefix}3dtext-pig
│⭔ ${prefix}3dvalentine-cards
│⭔ ${prefix}3dvintage-light-bulb
│⭔ ${prefix}3dxmas-cards
│⭔ ${prefix}3dxmas-cards2
│⭔ ${prefix}83day-card
│⭔ ${prefix}83day-card2
│⭔ ${prefix}83day-card3
│⭔ ${prefix}83day-card4
│⭔ ${prefix}advanced-glow
│⭔ ${prefix}ahri-league-of-legends
│⭔ ${prefix}alice-league-of-kings
│⭔ ${prefix}amily-arena-of-valor
│⭔ ${prefix}angels-wings
│⭔ ${prefix}anonymous-neon
│⭔ ${prefix}art-shader
│⭔ ${prefix}avengers
│⭔ ${prefix}azzenka-league-of-kings
│⭔ ${prefix}balloon-noel
│⭔ ${prefix}balloon-text
│⭔ ${prefix}balloons-cards
│⭔ ${prefix}balloons-love
│⭔ ${prefix}bats-halloween
└┬─────────────┈❖
┌┤「 PHOTO OXY 」
│└─────────────┈❖
│⭔ ${prefix}shadow 
│⭔ ${prefix}cup 
│⭔ ${prefix}cup1 
│⭔ ${prefix}burnpaper 
│⭔ ${prefix}lovemessage 
│⭔ ${prefix}undergrass 
│⭔ ${prefix}woodheart
│⭔ ${prefix}woodenboard 
│⭔ ${prefix}wolfmetal 
│⭔ ${prefix}nature3d 
│⭔ ${prefix}underwater 
│⭔ ${prefix}golderrose 
│⭔ ${prefix}fallleaves 
│⭔ ${prefix}flamming
│⭔ ${prefix}harrypotter
└┬─────────────┈❖
┌┤「 QUOTES 」
│└─────────────┈❖
│⭔ ${prefix}quotesanime
│⭔ ${prefix}animequotes
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}randomquote
│⭔ ${prefix}muslimquote
│⭔ ${prefix}galauquote
│⭔ ${prefix}kanyequote
│⭔ ${prefix}trumpquote
│⭔ ${prefix}trumpthink
│⭔ ${prefix}creepyfact
│⭔ ${prefix}faktaunik
│⭔ ${prefix}puisi
│⭔ ${prefix}pantun
│⭔ ${prefix}cerpen
└┬─────────────┈❖
┌┤「 RPG 」
│└─────────────┈❖
│⭔ ${prefix}hunt
│⭔ ${prefix}mining
│⭔ ${prefix}heal
│⭔ ${prefix}limit
│⭔ ${prefix}inventory
│⭔ ${prefix}leaderboard
│⭔ ${prefix}buy [option]
│⭔ ${prefix}sell [option]
└┬─────────────┈❖
┌┤「 RANDOM 」
│└─────────────┈❖
│⭔ ${prefix}simih [teks]
│⭔ ${prefix}apikey
│⭔ ${prefix}coffe
│⭔ ${prefix}infogempa
│⭔ ${prefix}ebinary [teks]
│⭔ ${prefix}dbinary [teks]
│⭔ ${prefix}styletext [teks]
└┬─────────────┈❖
┌┤「 STICKER 」
│└─────────────┈❖
│⭔ ${prefix}sticker
│⭔ ${prefix}attp [teks]
│⭔ ${prefix}ttp [teks]
│⭔ ${prefix}emojimix 😎+🤠
│⭔ ${prefix}emojimix2 😎
│⭔ ${prefix}patrick
│⭔ ${prefix}dadu
│⭔ ${prefix}amongus
│⭔ ${prefix}gawrgura
│⭔ ${prefix}anjing
│⭔ ${prefix}bucinstick
└┬─────────────┈❖
┌┤「 SEARCH 」
│└─────────────┈❖
│⭔ ${prefix}anime [query]
│⭔ ${prefix}manga [query]
│⭔ ${prefix}character [query]
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}groupwhatsapp
└┬─────────────┈❖
┌┤「 STALK 」
│└─────────────┈❖
│⭔ ${prefix}githubstalk
│⭔ ${prefix}stalkig
│⭔ ${prefix}stalktiktok
│⭔ ${prefix}twitterstalk
│⭔ ${prefix}stalk [option] [query]
└┬─────────────┈❖
┌┤「 STICKER EFEK 」
│└─────────────┈❖
│⭔ ${prefix}wasted
│⭔ ${prefix}fisheye
│⭔ ${prefix}pixelate
│⭔ ${prefix}invert
│⭔ ${prefix}roundimage
│⭔ ${prefix}1977 
│⭔ ${prefix}aden
│⭔ ${prefix}clarendon
│⭔ ${prefix}gingham
│⭔ ${prefix}hudson 
│⭔ ${prefix}inkwell 
│⭔ ${prefix}earlybird 
│⭔ ${prefix}kelvin 
│⭔ ${prefix}lark
│⭔ ${prefix}lofi 
│⭔ ${prefix}maven 
│⭔ ${prefix}mayfair 
│⭔ ${prefix}moon 
│⭔ ${prefix}nashville 
│⭔ ${prefix}perpetua 
│⭔ ${prefix}reyes 
│⭔ ${prefix}rise 
│⭔ ${prefix}slumber 
│⭔ ${prefix}stinson 
│⭔ ${prefix}toaster 
│⭔ ${prefix}valencia 
│⭔ ${prefix}walden 
│⭔ ${prefix}willow 
│⭔ ${prefix}xpro2 
│⭔ ${prefix}pencil
│⭔ ${prefix}triggered
│⭔ ${prefix}trigger
│⭔ ${prefix}jail
│⭔ ${prefix}rainbow
│⭔ ${prefix}rip
│⭔ ${prefix}sepia
│⭔ ${prefix}wanted
└┬─────────────┈❖
┌┤「 SERTIFIKAT 」
│└─────────────┈❖
│⭔ ${prefix}toloserti 
│⭔ ${prefix}fuckboy
│⭔ ${prefix}fuckgirl
│⭔ ${prefix}bucinserti
│⭔ ${prefix}goodboy
│⭔ ${prefix}goodgirl
│⭔ ${prefix}badboy
│⭔ ${prefix}badgirl
│⭔ ${prefix}pacarserti
└┬─────────────┈❖
┌┤「 TEXT PRO 」
│└─────────────┈❖
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│⭔ ${prefix}3d-effect 
│⭔ ${prefix}3d-rubystone 
│⭔ ${prefix}3d-text-sub-zombie 
│⭔ ${prefix}3dengraved 
│⭔ ${prefix}3dgold 
│⭔ ${prefix}3dgolden 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dlove 
│⭔ ${prefix}3dluxury 
│⭔ ${prefix}3dneonlight 
│⭔ ${prefix}3dpapercut 
│⭔ ${prefix}3drainbow 
│⭔ ${prefix}3drealistic 
│⭔ ${prefix}3drosegold 
│⭔ ${prefix}3dscifi 
│⭔ ${prefix}3dsilver 
│⭔ ${prefix}3dspace 
│⭔ ${prefix}3dstone 
│⭔ ${prefix}3dtext-effect 
│⭔ ${prefix}3dunderwater 
│⭔ ${prefix}3dvintage 
│⭔ ${prefix}3dwaterpipe 
│⭔ ${prefix}alice-league-of-kings 
│⭔ ${prefix}angel-wing-galaxy 
│⭔ ${prefix}anubis 
│⭔ ${prefix}arch-crossfire 
│⭔ ${prefix}art-shader 
│⭔ ${prefix}assassins-creed 
│⭔ ${prefix}avengers 
│⭔ ${prefix}azzenka-league-of-kings 
│⭔ ${prefix}balloons-cards 
│⭔ ${prefix}balloons-love 
│⭔ ${prefix}bearlogo 
│⭔ ${prefix}bg-crossfire 
│⭔ ${prefix}birthday-cake 
│⭔ ${prefix}birthday-cards 
│⭔ ${prefix}birthday-greeting 
│⭔ ${prefix}birthday-roses 
│⭔ ${prefix}black-metal 
│⭔ ${prefix}blood-frosted 
│⭔ ${prefix}blood-text 
│⭔ ${prefix}blue-effect 
│⭔ ${prefix}blue-glitter 
│⭔ ${prefix}brickwall 
│⭔ ${prefix}brokentext 
│⭔ ${prefix}bulb-effect 
│⭔ ${prefix}bubble-effect 
└┬─────────────┈❖
┌┤「 VOICE CHANGER 」
│└─────────────┈❖
│⭔ ${prefix}bass [reply audio / vn]
│⭔ ${prefix}blown [reply audio / vn]
│⭔ ${prefix}deep [reply audio / vn]
│⭔ ${prefix}earrape [reply audio / vn]
│⭔ ${prefix}fast [reply audio / vn]
│⭔ ${prefix}fat [reply audio / vn]
│⭔ ${prefix}nightcore [reply audio / vn]
│⭔ ${prefix}reverse [reply audio / vn]
│⭔ ${prefix}robot [reply audio / vn]
│⭔ ${prefix}slow [reply audio / vn]
│⭔ ${prefix}tupai [reply audio / vn]
└┬─────────────┈❖
┌┤「 WEBZONE 」
│└─────────────┈❖
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
└──────────────┈❖`
                let btn = [{
                    urlButton: {
                        displayText: 'TikTok Creator',
                        url: global.myweb
                    }
                }, {
                    callButton: {
                        displayText: 'Number Phone Owner',
                        phoneNumber: global.owner[0]
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Rules',
                        id: 'rules'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donasi'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Sewabot',
                        id: 'sewabot'
                    }
                }]
                let setbot = db.settings[botNumber]
                if (setbot.templateImage) {
                    hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                } else if (setbot.templateGif) {
                    hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateVid) {
                    hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                } else if (setbot.templateMsg) {
                    hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                }
            }
            break
            default:
                if (budy.startsWith('Bot')) {
                    m.reply('Ya ada apa kak?')
                }
                if (budy.startsWith('Hi')) {
                    m.reply('Hi, Apa ada yang dapat saya bantu?')
                }
                if (budy.startsWith('Hai')) {
                    m.reply('Hai, Apa ada yang dapat saya bantu?')
                }
                if (budy.startsWith('Halo')) {
                    m.reply('Halo, Apa ada yang dapat saya bantu?')
                }
                if (budy.startsWith('Hello')) {
                    m.reply('Hello, Apa ada yang dapat saya bantu?')
                }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.database
                    if (!(budy.toLowerCase() in msgs)) return
                    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})