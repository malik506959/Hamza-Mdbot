const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RoWkh3NkY4RzhhYXN1TVhQZzdZVWFsYkl0ZnRvTlhXMnB6ZkZFblhYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDJUS3M3MVYrMGpOZmt5d1RMR1F5VXJsd3J2eUZvb0hFUlE3RUgyb1VCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTksxdU5SblhvZTZxb0NqN2N1MUVJekM4TXJaZVlISy9tODRQc20yREVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZmVvbmNCdTY4Lzc0d0hxengydWEzTGNEREx3bmZxTHAreG9LQzJYR0JrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFcWR2UWZISVQ0NFE3LzhFeUkvMlB0cGtKbDJCdmtHakZsa2ZyZ0pPMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtiaHcxbXp4KzZFY3pmTkZHUkh2OG1PTFdkekxHQUw0bzZnbTFLNVY2VmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtyN0swL3hHRkRBZDdaaWdQWVUycGJYaTdranN0cVk5dXUyUXNwcDlsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNpRllJN2l2b3FJbWNVRHI3TkZaaHRSbmI1cGp4UFMzWWRGREVNaVVUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN1aGRjSWp5OE9FRjVhN1E5eFF5R0dMaG10TkJhdHFmTkYyenVIMk54M1VGSGp2eWtrQjNUZVJsZE5xL3RqcnFsbjd5eW42UlR2Y2FKUGViQnJhWEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IkhmZ2Z5K2xiWnJKdUI4L0FXTkxBM1UycVVLK2Qrd3krV2pwMHR2aFVvR289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzYzNzU4NTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzE3NTg5NTA4MzJCREMxQzU0NkE4NDVCRERFNkFCRCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgyMzU5OTQyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNjM3NTg1MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDNzJFRjU4ODc2QjdENTgwNEMyQkY3MzM5NTA4RTY5IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODIzNTk5NDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2Mzc1ODUwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUMwOUJGRUE5ODJFMEU0OTIxNzNDNjA1OTIwNTQyMkYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MjM1OTk0Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzYzNzU4NTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzU3M0U1OTVBNTcxNzFBREE4MDdFRDhFRUI0MkQxNyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgyMzU5OTQzfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IldYRU03SkJSIiwibWUiOnsiaWQiOiI5MjMzNjM3NTg1MDY6MjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI3Mzk1MTQwMTIzMDU2ODoyNkBsaWQiLCJuYW1lIjoi8J2QjPCdkIDwnZCL8J2QiPCdkIog8J2QjPCdkIjwnZCN8J2Qh/CdkIDwnZCA8J2QjSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJrNEtZRkVQek84dEVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicmhWUFpRUlhYUDMyanBReGxnZjRwZlZ5aXU5ellwWGxJSTY2WnRMd1h4Yz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRG1GbHhmUXJmUTU2OERkOG05MmtjV0NkY0tLck5ML2NJM0tHTUhDeGN6RVVlK3FveHpFU0R2OHhZNFBkLzZnczhNS1RCamJFMTN0VTBtWHpUZnpzRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InA0TlNjZzhmcjFuZjVTczVRSnFEcDB6QnhvUldPbmF2THlHbDNCS2JOQVdheDdSUnlVZnVPN0k0NDlMaXh4S1c4Z2pMa2RxbnYxRFpJcmE2elRxMEJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNzM5NTE0MDEyMzA1Njg6MjZAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE0VlQyVUVWMXo5OW82VU1aWUgrS1gxY29ydmMyS1Y1U0NPdW1iUzhGOFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ1FBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MjM1OTk0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNanAifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Hamza-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://img.sanishtech.com/u/267297d35109d3530c31d600de5645e5.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "YHamza-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Hamza-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923363758506",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*HamzaMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ HamzaMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://img.sanishtech.com/u/267297d35109d3530c31d600de5645e5.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923363758506",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
