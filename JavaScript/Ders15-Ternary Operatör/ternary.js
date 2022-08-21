
let userName = prompt("Kullanici adinizi giriniz: ")
let info = document.querySelector("#info")

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz bulunamadi."}`

var money;
    var canBuy = 
        (money < 17) ? "Satın alamazsın..":
        (money > 30) ? "Satın alabilirsin..":
        "Para miktarını girmen gerekmektedir..";

    console.log(canBuy) 