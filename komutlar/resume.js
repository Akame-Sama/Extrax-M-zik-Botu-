module.exports = {
  name:"resume",
  alises:["devam"],
  code:`
  $resumeSong
  $color[$getServerVar[hex]]
  $thumbnail[$songInfo[thumbnail]]
  $addTimestamp
  $description[
  ⏸️ • Şarkı Başarıyla Devam Ettirildi  
  ]
  $suppressErrors[🌀 • Hiçbir Şarkı Çalınmıyor O Yüzden Bu İslev Uygulanamadı]
  
  `
}