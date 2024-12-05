const count = document.getElementById("count")
console.log(count.length);
const btnGroup = document.querySelector(".btn-group")
btnGroup.addEventListener("click", function(e){
    if(e.target.classList.contains("btnSubtract")){
        if(parseInt(count.innerHTML) > 0){
            count.innerHTML--
        }
    }else if(e.target.classList.contains("btnAdd")){
        count.innerHTML++
    }else{
        count.innerHTML = 0
    }
})