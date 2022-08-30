

let items = [1, 2, 3, 4, 5]
let femaleUsers = ["Ayşe", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)

console.log(items[0])
console.log(items[0][0])
console.log(items[0].length)

let newItems = items.splice(2,4) // 2'den başla 4 tane
console.log(newItems)

items.unshift("lorem")
items.push("ipsum")
console.log(items)

console.log(items.indexOf("ipsum"))

let copyItems = items // bu yapı kopyalamadı
console.log(items)
copyItems.pop()
console.log(items)

copyItems = items.slice() // kopyalamak
console.log("items: ", items)
console.log("copyItems: ", copyItems)
copyItems.pop()
console.log("items: ", items)
console.log("copyItems: ", copyItems)

let es6Items = [...items] // bu da kopyalamak
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] // array birleştirme
console.log(allUsers)

console.log(allUsers.toString()) // stringe çevirdi
console.log(allUsers.join(" -- ")) // stringe çevirdi arasına -- işareti koyarak

allUsers.splice(allUsers.length-1, 0, "Melisa") // istediğin index'e değer atamak
console.log(allUsers)

allUsers.splice(Math.floor(allUsers.length/2), 0, "Lorem") // ortadaki index'e değer atamak
console.log(allUsers)
