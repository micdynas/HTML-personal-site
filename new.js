<<<<<<< HEAD
let div = document.querySelector("div")
div.addEventListener( "click", random) 
function random() {

    let h = Math.random()*300
let w = Math.random()*300
div.style.width=` ${w}`
div.style.height=` ${h}`

let r =  Math.random()*255
let g =  Math.random()*255
let b =  Math.random()*255
div.style.backgroundColor = `rgb(${r},${g},${b})`

}


window.addEventListener("mousemove", (e)=>{

        div.style.left = e.clientX + "px"
        div.style.top = e.clientY + "px"


=======
let div = document.querySelector("div")
div.addEventListener( "click", random) 
function random() {

    let h = Math.random()*300
let w = Math.random()*300
div.style.width=` ${w}`
div.style.height=` ${h}`

let r =  Math.random()*255
let g =  Math.random()*255
let b =  Math.random()*255
div.style.backgroundColor = `rgb(${r},${g},${b})`

}


window.addEventListener("mousemove", (e)=>{

        div.style.left = e.clientX + "px"
        div.style.top = e.clientY + "px"


>>>>>>> 4d9ae793a2aec40f9411ca12ac1bdb9e5551f6fa
})