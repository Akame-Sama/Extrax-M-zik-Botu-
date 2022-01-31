module.exports = {
  name:"çal",
  aliases:["p","play","oynat"],
  code:`

  $color[$getServerVar[hex]]
  $thumbnail[$songInfo[thumbnail]]
  $description[$noMentionMessage Şarkısı Listeye Eklendi]
  $playSong[$noMentionMessage;Şarkı Bulunamadı]
  $onlyIf[$noMentionMessage!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar[$authorID]}{description:Lütfen Bir Şarkı Ismi Girin}]
  
  `}