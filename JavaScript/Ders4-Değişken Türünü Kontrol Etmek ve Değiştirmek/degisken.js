
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

console.log(typeof("11") === "string")

let number1 = "11"
console.log("number1: ", parseInt(number1), typeof(number1)) // int oldu

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", parseInt(number2), typeof(number2)) // inti aldi

let number3 = "px11px"
number3 = parseInt(number3)
console.log("number3: ", parseInt(number3), typeof(number3)) // NaN

let number4 = "11.1"
number4 = Number(number4)
console.log("number4: ", number4, typeof(number4))

// parseInt: 11px'in icindeki rakamları alabilir
// number: sadece rakamları alabilir

let number5 = 55
number5.toString()
console.log(number5, typeof(number5))
number5 = number5.toString()
console.log(number5, typeof(number5))




