
let userName = prompt("Kullanici adinizi giriniz: ")
let age = prompt("Yasinizi giriniz: ")
let info = document.querySelector("#info")

if (userName && age >= 18){
    info.innerHTML = "Ehliyet alabilirsiniz."
}
else if(!userName){
    info.innerHTML = "Kullanici adiniz yok."
}
else if(!(age >= 18)){
    info.innerHTML = "Yas bilginiz yok veya 18'den kucuk"
}