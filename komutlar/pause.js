module.exports = {
  name:"pause",
  alises:["durdur"],
  code:`
  $pauseSong
  $color[$getServerVar[hex]]
  $thumbnail[$songInfo[thumbnail]]
  $addTimestamp
  $description[
  ◀️ • Şarkı Başarıyla Durduruldu 
  ]
  $suppressErrors[🌀 • Hiçbir Şarkı Çalınmıyor O Yüzden Bu İslev Uygulanamadı]
  
  `
}