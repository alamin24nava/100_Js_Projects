const userInput = document.querySelector("#userInput")
const vowelNumber = document.querySelector(".vowel-number")

const handleSubmit = (event)=>{
    event.preventDefault()
    if(userInput.value == "")return alert("Please Provide Something..!")
    cVowels(userInput.value)
}

const cVowels = (str) => {
    let chrtArr= str.split("")
    let vowels = "aeiouAEIOU";
    let arr = vowels.split("")
    let count = 0;
    for(let i = 0; i< chrtArr.length; i++){
        if(arr.includes(chrtArr[i])){
            count++
        }
    }
    vowelNumber.innerHTML = `${str} has ${count} vowel strings.`
};




