

let items = [10, 20, 30, 40]
console.log("items - ilk hali: ", items)

items.push(50)
console.log("items - sonuna ekledi: ", items)

items.unshift(5)
console.log("items - başına ekledi: ", items)

items.pop()
console.log("items - sonuncu atıldı: ", items)

let lastItem = items.pop()
console.log("items - son elemanı atıp değişkene atadık: ", items)

let firstItem = items.shift()
console.log("items - ilk elemanı atıp değişkene atadık: ", items)

items[1] = 22
console.log("items - belli bir elemanı değiştirdik: ", items)

items[items.length-1] = 555
console.log("items - son elemanı değiştirdik: ", items)

items[10000] = 753
console.log("items - 10000.elemana değer atadık: ", items) // arada kalanları boş olarak atadı


