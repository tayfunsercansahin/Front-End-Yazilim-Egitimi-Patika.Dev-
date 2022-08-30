
function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}

helloFuncV1("HelloFunkV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)

helloFuncV2("HelloFunkV2")

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)

helloFuncV3("HelloFunkV3", "2Parametre")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4 = ("HelloFuncV4", "2Parametre 2return")