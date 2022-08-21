
let item = document.querySelector("ul#list>li:last-child")

console.log(item)

let item2 = document.querySelector("ul#list>li:first-child")

console.log(item2)

item2.innerHTML = "Degisti"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi olusturdugumuz oge"

ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM) // en basa ekler