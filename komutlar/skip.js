module.exports = {
  name:"skip",
  aliases:["s","atla"],
  code:`
  $suppressErrors[🌀 • Herhangi Bir Müzik Listede Bulunmuyor]
  $color[$getServerVar[hex]]
  $thumbnail[$userAvatar[$clientID]]
  $description[🧸 • $songInfo[title] Şarkısı Atlandı Sıradaki Şarkıya Geçildi Eğer Listede Şarkı Bulunmuyorsa Sesten Çıkış Yapıldı]

  
  $skipSong
  `}