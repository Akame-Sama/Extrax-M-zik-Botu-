module.exports = {
  name:"loop",
  alises:["tekrarla"],
  code:`
  $loopSong
  $color[$getServerVar[hex]]
  $thumbnail[$songInfo[thumbnail]]
  $addTimestamp
  $description[
  🌀 • Şarkı Başarıyla Dongüye Alındı
  ]
  $suppressErrors[🌀 • Hiçbir Şarkı Çalınmıyor O Yüzden Bu İslev Uygulanamadı]
`}