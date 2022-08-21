
let username = prompt("Kullanıcı adınızı giriniz: ")

if (username.length > 0){ // if (username) de olabilir
    console.log(`Kullanıcı bilginiz: ${username}`)
}
else {
    console.log("Bilgi yok.")
}