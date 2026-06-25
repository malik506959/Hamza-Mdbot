const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Hamza-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU15Qlk3Z3B5M1RMVFBTYW5qbG90TTMzOFJjcTY4RGlhVGVtSjhvYjNVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmd4bDZ1RExMMkMrbEhMK29IRjVmdTBhTkJjZjFPKzJmSnJpbEtqVFF3VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSmRmTkhNQ1pEZGNTUEtQNVNuUFNQNWtsai9LV3BoQ2UybVNRdUYxdDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYlh6UWtFK1V6STVGWVBRcmFwdkQ3TnNTY3JVZXJwdmY1cTdaRCsySXlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDVTZhOFc1ZzQrUFpEQ21KUE5PYUZMWVp1QUpuY0hRaGVQYjJHMGlDRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIejYvam5DV09lWTFVOCsyV2Fpam1UREVNUGlkVjh6Y1BYNUtBVVJlRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUd2WGwxTjdxZGJYQXhDUnpsNHNNWTNKaU56S2RmaDB2MVdjN3AxSFFVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblN6akhTNlpla1c4THV6dzQrc2gxM0xzaVhTdVlzNUp0aXVFdm12K2tEST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlExUzIwV2ZrVFRPZm9qd0Q4OWNDYmJDYm5naHBVblV5TnZITjF6b0ZTYXkxZm1udDNCTXVGY1RQWFBkVFZEa2s5eHhvSGw0aDVQR3JLaU1XSTlhcmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6ImcrRmNCT3BZZzd4ME9kQmgvT2NGQXlIdXduV0dvenVzNzFsTnlwRUJGWVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzYzNzU4NTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzJDQTNFNjRBRDI2MzlEOUM1MEQ0REFGMTYwODUxQSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgyMzYyMTI4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNjM3NTg1MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDN0E3MjkyQkYyQjdEQUQ1NzRCRUJBRDFCQzcxNUU3IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODIzNjIxMjh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2Mzc1ODUwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUMyN0VBNDQ4M0RDQUMwNUUyODk4OEYyMDU4Mjk0RjAiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MjM2MjEyOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzYzNzU4NTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzdGNEU0RkIyMTY3NDZBODNGMUIzMTNDNkY5MDkwQiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgyMzYyMTI5fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJFQkY1QU1SIiwibWUiOnsiaWQiOiI5MjMzNjM3NTg1MDY6MjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI3Mzk1MTQwMTIzMDU2ODoyN0BsaWQiLCJuYW1lIjoi8J2QjPCdkIDwnZCL8J2QiPCdkIog8J2QjPCdkIjwnZCN8J2Qh/CdkIDwnZCA8J2QjSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJrNEtZRkVJamc4dEVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicmhWUFpRUlhYUDMyanBReGxnZjRwZlZ5aXU5ellwWGxJSTY2WnRMd1h4Yz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWlZYWU1LLzhVTG5qN2FFN2FpTEhaSENYUzgzTUtnNi8vRnhYL2hZM0wyZ1lCK0l3MmtrUTl5S1dpb25ZSjRsRitYOUFGVU53d1JPNkpLRXE1NXFRQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkdDK1NBZFMzWk5GMnJEengxWkZJZWRMUDBsL2M4QTJFTlhOOHlmZE1COFVNVTdrNUx6bmFNZUROL2tBWmpiWjcwQ0krQmg1czd0eXJjNHlxS3ZaMmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNzM5NTE0MDEyMzA1Njg6MjdAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE0VlQyVUVWMXo5OW82VU1aWUgrS1gxY29ydmMyS1Y1U0NPdW1iUzhGOFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ1FBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MjM2MjEyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNanAifQ==",
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
