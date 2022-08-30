
localStorage.setItem('myCat', 'caddy')
let ad = localStorage.getItem('myCat')
console.log(ad)

let ad2 = localStorage.getItem('yourCat')
console.log(ad2)

localStorage.setItem('item', 'kodluyoruz')
let ad3 = localStorage.getItem('item')
console.log(ad3)

localStorage.removeItem('myCat')
console.log(localStorage.getItem('myCat'))
