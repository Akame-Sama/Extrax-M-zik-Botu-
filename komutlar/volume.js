module.exports = {
  name:"volume",
  
  code:`
  $volume[$noMentionMessage]
  $color[$getServerVar[hex]]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  Müziğin Ses Seviyesi **$noMentionMessage** Olarak Ayarlandı
  ]
  $onlyIf[$isNumber[$noMentionMessage]!=false;{color:$getServerVar[hex]}{thumbnail:$userAvatar[$authorID]}{description: Ses Seviyesini Sayı Dışında Herhangi Bir Fonksiyon Kullanarak Girmeyiniz}]
  $onlyIf[$noMentionMessage=>101;{color:$getServerVar[hex]}{thumbnail:$userAvatar[$authorID]}{description: 🌌 • 100'den Büyük Bir Ses Seviyesi Girmeyiniz }]
  $onlyIf[$noMentionMessage!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar[$authorID]}{description: 🌀 • Lütfen Bir Ses Seviyesi Girin}]
  $suppressErrors[⚡• Hiçbir Şarkı Çalınmadığı İçin Ses Seviyesi Ayarlanmıyor]
 `}