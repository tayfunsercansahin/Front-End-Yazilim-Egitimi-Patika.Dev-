
// let firstName = "Lorem"

/*
function greetings(firstName){
    console.log(`Merhaba ${firstName ? firstName : ""}`)
}
*/

function greetings(firstName = ""){
    console.log(`Merhaba ${firstName}`)
}

greetings("Apple")

function greetings2(firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('greeting', 'Merhaba')
domIdWriteInfo('greeting', greetings2("Ad", "Soyad"))