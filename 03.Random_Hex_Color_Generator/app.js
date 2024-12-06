const hexCode = document.querySelector("#hexCode")
const btn = document.querySelector(".btn")

const generateCode = ()=>{
    let color = Math.random().toString(16).substring(2,8)
    hexCode.innerHTML = `#${color}`
    hexCode.style.background = `#${color}`
}

btn.addEventListener("click", generateCode)

