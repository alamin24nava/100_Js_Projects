const palindrome = document.querySelector(".palindrome")
const inputPalindrome = document.querySelector("#inputPalindrome")
const btnPalindrome = document.querySelector(".btn-palindrome")

const handleSubmit = (event)=>{
    event.preventDefault()
    if(inputPalindrome.value == "")  return alert("Please Provide Something..")
    let result = isPalindrome(inputPalindrome.value)   
    palindrome.innerHTML = result
}
const reverseStr = (str)=>{
    return str.split("").reverse().join("").toLowerCase();
}
const isPalindrome = (str)=>{
    let result = str.toLowerCase() == reverseStr(str)
    if(result == true){
        return `${str} is Palindrome String...!`
    }else{
        return `${str} is NOT Palindrome String...!`
    }
}