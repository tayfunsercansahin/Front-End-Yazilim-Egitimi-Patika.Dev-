
let user = {userName: "hakanYalcinkaya", isActive: true}

console.log(user.userName)
console.log(user.isActive)

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')
console.log(userInfo) // tamamen string olarak aldi.
userInfo = JSON.parse(userInfo)
console.log(userInfo) // parse ederek duzgun aldi.
console.log(userInfo.isActive) // artik ulasilabilir

let items = [1,2,3,user]
console.log(items)
localStorage.setItem('newItem', JSON.stringify(items))
let newIt = JSON.parse(localStorage.getItem('newItem'))
console.log(newIt)