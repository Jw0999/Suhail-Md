const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_38_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPcWRkZ0NhcGYrR3Q0M29uUTdXTTdNOVhUcldnL01DSTgzVkdPeVIwa3gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDAxOTYwOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlGMEY1Nzc0MTkxN0MyNEQwQUREQjlDQjQwOTE3MjRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODU5MTkyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBSG1YQXFENFNTdXJBcmJTOEh5d3lRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4Y2I5YWFkLTQzZjQtNDliYS04MWMzLTEyMjk2YTA2YTRhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDEyOSxcbiAgICAgIDQxLFxuICAgICAgMzMsXG4gICAgICA3MCxcbiAgICAgIDEyNCxcbiAgICAgIDc5LFxuICAgICAgMTAyLFxuICAgICAgMTA5LFxuICAgICAgMTYwLFxuICAgICAgNzUsXG4gICAgICA2NSxcbiAgICAgIDEyOSxcbiAgICAgIDUxLFxuICAgICAgMjIwLFxuICAgICAgMTgxLFxuICAgICAgMTA2LFxuICAgICAgNTMsXG4gICAgICAyMzUsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMTQzLFxuICAgICAgMjI5LFxuICAgICAgMjExLFxuICAgICAgMjIxLFxuICAgICAgMTU1LFxuICAgICAgMTQwLFxuICAgICAgMTM5LFxuICAgICAgMTk1LFxuICAgICAgMTU0LFxuICAgICAgMjM1LFxuICAgICAgOTEsXG4gICAgICAxNjEsXG4gICAgICAzMCxcbiAgICAgIDc1LFxuICAgICAgMTgwLFxuICAgICAgMTQ0LFxuICAgICAgMTk1LFxuICAgICAgMTEzLFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0NTVIWVZMVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0MDE5NjA5NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzYwMjYzMTI0NTg4MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDQTB0MEdFS3JEdnJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2VDaTlpTUdEWFYwMERKT01PRk1hMmdsamx6SU4zVnFOWFM1djlKSmFnUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQTnNpZDk0Rmk1Y3dDUi94VVRDM3pnY3FxbC96aHVMZG1IYkdWZU5mWGNBRGZmVVBGcWM4aXZ5Vnd5VS9hY1ZDeURjZVZCUDVsTzViRVFCcTRxUkVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIU0UvaVo3djU0dm1GWFdJeHlqcHNESFlrd3BJYU1oOGdPeExZa05ueDFjWFBUTFljdkJHa1lUWUlYcXdKQ1IwZVFCVHJCSFlpc21pWEpsT2tmSk9pUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQwMTk2MDk0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU5MTkxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJmbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmZsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZS94cElhTVhIeWRISU1MVWNoV2NTWDhnL3JLc1JNdEdRenNoTEVHY1Fwaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODA2OTkxMzkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5MTQ2MDY4NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
