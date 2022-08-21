
//let h2 = document.getElementsByTagName('h2')

let title = document.getElementById('title')
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")

console.log(link)
console.log(link.innerHTML)
link.innerHTML += " değişti."

let link2 = document.querySelector("#kodluyoruzLink")
console.log(link2)
link2.style.color = "red"
link2.classList.add('btn')
