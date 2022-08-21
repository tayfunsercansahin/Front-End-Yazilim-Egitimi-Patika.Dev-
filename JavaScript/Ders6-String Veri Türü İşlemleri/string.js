
let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

console.log(email.length)

console.log(firstName[0])
console.log(firstName.charAt(0))
console.log(firstName.charAt(2))

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

console.log(email.search("@"))
console.log(email[15])
console.log(email.search('h')) // 0.indis
console.log(email.search('asdsa')) // yoksa -1

console.log(email.slice(1,10)) // belli bir yere kadar
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)
console.log(DOMAIN.indexOf('.'))
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')))

console.log(email)
email =  email.replace('gmail.com','kodluyoruz.org')
console.log(email)

console.log(email.includes('@')) // var mı? true
console.log(email.includes('dasdsa')) // yoksa, false

console.log(email.endsWith('@')) // ile mi bitiyor false
console.log(email.endsWith('org')) // true
console.log(email.endsWith('kodluyoruz.org')) // true

console.log(email.startsWith('ak')) // ile mi basliyor
console.log(email.startsWith('hakan')) // true

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)










