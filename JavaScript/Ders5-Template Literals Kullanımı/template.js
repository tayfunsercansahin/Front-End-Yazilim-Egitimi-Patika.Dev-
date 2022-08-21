
let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hoş geldin", "mail adresin:", email)

let info = `Merhaba ${username} sitemize hoş geldin.. 
Mail adresin: ${email}, 
Kısa isminiz: ${username[0]}.
Mail adresinin uzunluğu: ${email.length}
Borcunuz: ${(2 + 3) * 10} TL
Günün saat bilgisi: ${new Date().getHours()}`
console.log(info)