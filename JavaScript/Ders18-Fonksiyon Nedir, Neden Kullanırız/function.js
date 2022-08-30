
function helloWorld(){
    console.log("Hello World")
}

function hello(){
    console.log("Merhaba")
    helloWorld()
}

/* HATALI KULLANIM, DIGER VIDEOLARDA DUZELECEK
function userCheck(){
    if(userName && age >= 18){
        info.innerHTML = "Ehliyet alabilirsiniz"
    }
    else if(!userName){
        info.innerHTML = "Kullanici adiniz yok"
    }
    else if(!(age >= 18)){
        info.innerHTML = "Yas bilginiz yok veya <18"
    }
}
*/

hello()



