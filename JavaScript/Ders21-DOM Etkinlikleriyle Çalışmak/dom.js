
let greeting = document.querySelector("#greeting")

greeting.addEventListener("click", domClick)
greeting.addEventListener("mouseover", domClick)

function domClick(){
    console.log("Tiklandi")
    console.log(this.innerHTML)
    console.log(this.innerHTML = "Tikladin ve degisti")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}