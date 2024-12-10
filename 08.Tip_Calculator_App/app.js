const submitBtn = document.getElementById("submitBtn");
const billValue = document.querySelector("#billValue");
const personValue = document.querySelector("#person")
const rateService = document.querySelector("#rateService");
const dataList = document.querySelector(".data-list")

const totalTip = ()=>{
    let tipAmt = billValue.value * (rateService.value / 100);
    return tipAmt
}
const totalBill = ()=>{
    let total = parseInt(billValue.value) + totalTip()
    return total
}
const tipPerPerson = ()=>{
    return totalTip() / personValue.value
}
const totalPerPerson =()=>{
    return totalBill() / personValue.value
}

const displayData = ()=>{
    const para = document.createElement("div");
    para.innerHTML = `
    <p>Tip: <span class="fw-bold">$${totalTip().toFixed(2)}</span></p>
    <p>Total Bill: <span class="fw-bold">$${totalBill().toFixed(2)}</span></p>
    <p>Tip Per Person: <span class="fw-bold">$${tipPerPerson().toFixed(2)}</span></p>
    <p>Total Per Person: <span class="fw-bold">$${totalPerPerson().toFixed(2)}</span></p>
    `;
    dataList.appendChild(para);
}

submitBtn.addEventListener("click", ()=>{
    displayData()
});

