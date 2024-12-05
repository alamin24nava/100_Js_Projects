const number = document.querySelector("#number")
const generateNumber = document.querySelector(".generateNumber")
generateNumber.addEventListener("click", ()=>{
    let ran = Math.floor((Math.random() * 1000) + 1);
    number.innerHTML = ran
})