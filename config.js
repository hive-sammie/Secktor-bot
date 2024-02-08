const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Africa,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://hive-sammie:1@Doctor.1@cluster0.u1smxsv.mongodb.net/?retrywrites-true&-majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/6e214caa0ca1b4f3789cc.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2349136429929" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349136429929";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©samᴜeʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "samuel",
  packname: process.env.PACK_NAME || "🥷🏻",
  botname : process.env.BOT_NAME  || "samᴜel-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Samuel",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_05_02_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUU0RlZHVjRyK053REFCWEpjTGpOelQ3aCtlUzFXaWhjcXQzd2VGd2Ntdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhyTlhEVlI5MEt0V25rZFVTOU5wd0R2UFVOMWYyRnBlNURmS2thS1NnRms9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUQ3OG1IVUpJZWdkU1RTcXZGc1VQMWYzR1p5ZlFWK2Z6ZStpd3ZPSUJVbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImxzQTkvUHlRbVFocjNBblFJMCtvTG1jd2o1U2g2ZytON1NVWGNocC9qVGc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0Y5NG41NmxqSC9IWFRUeUZXS2NkUmMrVmx3S0ZBS2l5TktGUUQ0Y28zND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImpyQlkvcXBHYlJzL3VmRnphSHVpeFBIOFhJdnFwV1h5Z2dYeUxQTnFvQUE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrSHZtd2lCSEthUVdnOUxKT1M2VUxyNVdLNXlCcThzRklFTVQwRXFORUVnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibkNxK1YrNEgrREp1aHhVOTgvQ1Z6bDB3bHg5QjFBL2V5WVRXSEU3Z3hCcz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsTEdwc3owMWdUMVZmRUFxd3JBeUtOeXc4TmVLSStkcVlpNnlHMmUrTHFURWh1dmp2cEhNUWlvYkV5bVB1OW1FcGc2YVFDU08zUXp6V3MvbUpBZlBBZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjMxLFwiYWR2U2VjcmV0S2V5XCI6XCJqQ0RRR0c1NEo4QlR5OGMvYTdZTUp0ejV4cmZDUzk1SE1rbVE1Y2tpeDNnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiLWtVR0t3ODFUVkszYjN5NDBET3FvQVwiLFwicGhvbmVJZFwiOlwiNzRhZmYzNDktMThjNS00MDdhLWEzMWUtODRkMzkwMGM1ZTg0XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJaclpBL1hJR3VORlJxYTdJQ3czQXhHdmhmanc9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhDOFJ1QTVYQUdXT09zL1NvaGJ0M2pJdktqZz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSXFkdHVVREVOWEhqYTRHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIk9NMUgreFcyV1RuUEdNUUZBMzlXTGRxYzlUUDRKOUhQZWVqNXEzUkNQVnc9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJZVDYwSlo4dHF3SVVXZUplNGJpS0V0M09uN1lySk15S3l0Z3ZnekJ2WXdYWHlicXpqd0t3TitGaWROTUVON2pBYWcxK0hHVDQzNHBTNkZrY1FSbGZEQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImtoRGlTcFVkM3F6M3NWL21yZTRsaFVwOXA1S3U4L2kzbjl2VnRIcGZZRlF2a2xjZnhSaVZiRm9JSEp3dTVKOFZscSs5WGkxZHFHN2tZRzVaL0ZqS0RnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ5MTM2NDI5OTI5OjlAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiNTQxMDQxMDU3MTM3MzE6OUBsaWRcIixcIm5hbWVcIjpcIn5TYW1taWXwn5SlflwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDkxMzY0Mjk5Mjk6OUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJUak5SL3NWdGxrNXp4akVCUU4vVmkzYW5QVXorQ2ZSejNubythdDBRajFjXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwNzMwMzg5OSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFCZThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCZTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOM3VteW5DaGdFbGdCOXo2TW1SaTVtTWxzTTh3by9jSDR3U0hTQkwyaWVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTgwMDcxNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjM5NTA0MDE2NVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
