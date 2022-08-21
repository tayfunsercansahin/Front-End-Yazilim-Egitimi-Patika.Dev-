
let greeting = document.querySelector("#greeting")

console.log(greeting.classList)

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class")

greeting.classList.remove("title", "third-class")

console.log(greeting.classList)