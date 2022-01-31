module.exports = {
  name:"queue",
  aliases:["liste","q"],
  code:`
  $color[$getServerVar[hex]]
  $thumbnail[$userAvatar[$clientID]]
  $addTimestamp
  $description[
  $queue
  ]
  $suppressErrors[🌀 • Hiçbir Şarkı Çalınmıyor Bu Yüzdende Liste Oluşturulamıyor]
`}