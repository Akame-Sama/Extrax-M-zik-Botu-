const aoi = require('aoi.js')
const bot = new aoi.Bot({
  token: process.env.token,
  prefix:["$getServerVar[prefix]","."]
  })

bot.onMessage()
bot.onJoined()
bot.onLeave()
bot.loadCommands('./commands')

bot.readyCommand({
  channel:"926388596863270912",
  code:`
  $title[Başarıyla Aktif Oldum]
  $color[$getServerVar[hex]]
  $thumbnail[$userAvatar[$clientID]]
  $addTimestamp


  $description[
  🌌 • Başarıyla Aktif Oldum
🌠 • <@$botOwnerID> Çalıştım Köle]
  
  `
  })


bot.musicEndCommand({ 
channel: "$channelID", 
code: `🌇 •, **Müzik Bittiği Için Sesten Çıkış Yaptım**
$leaveVc
` 
})

bot.musicStartCommand({
  channel:"$channelID",
  code:`
  $color[$getServerVar[hex]]

  $thumbnail[$songInfo[thumbnail]]

  $addTimestamp

  $author[⚡• Bir Müzik Başlatıldı]

  $description[

  $addField[Şarkı Bilgileri;

  🌀 • Şarkı Uzunluğu : $songInfo[duration]

  

  🌉 • Şarkı Açıklaması : $songInfo[description]

  

  🌇 • Şarkı Yazarı : $songInfo[publisher]

  

  🧸 • Şarkı Linki : [Tıkla]($songInfo[url])

  ;yes]

  ]

  
  `
  })

bot.variables({
  hex:"66FFFF",
  prefix:"?"
  })