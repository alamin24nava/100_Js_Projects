const userInput = document.querySelector("#userInput")
const vowelNumber = document.querySelector(".vowel-number")
const submitBtn = document.getElementById("submitBtn")
// const handleSubmit = (event)=>{
//     event.preventDefault()
//     if(userInput.value == "")return alert("Please Provide Something..!")
//     cVowels(userInput.value)
// }

// const cVowels = (str) => {
//     let chrtArr= str.split("")
//     let vowels = "aeiouAEIOU";
//     let arr = vowels.split("")
//     let count = 0;
//     for(let i = 0; i< chrtArr.length; i++){
//         if(arr.includes(chrtArr[i])){
//             count++
//         }
//     }
//     vowelNumber.innerHTML = `${str} has ${count} vowel strings.`
// };



const countVowel = ()=>{
    let countVowel =0;
    let wordValue = userInput.value.toLocaleLowerCase()
    for(let i =0; i < wordValue.length; i++){
        let letter = wordValue[i]
        if(letter.match(/([a,e,i,o,u])/)){
            countVowel++
        }
    }
    vowelNumber.innerHTML = `(${wordValue.toUpperCase()}) has ${countVowel} vowel strings.`
}

submitBtn.addEventListener("click",countVowel)
