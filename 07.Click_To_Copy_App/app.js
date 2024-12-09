const coupon = document.querySelector(".coupon")
const btn = document.querySelector('#submitBtn')
const copyText = ()=>{
    coupon.select();
    coupon.setSelectionRange(0,999999)
    document.execCommand("copy")
    btn.innerHTML = "Copied!"
    setTimeout(()=>{
        btn.textContent = "Check To Copy"
    },2000)
}
btn.addEventListener("click", copyText)