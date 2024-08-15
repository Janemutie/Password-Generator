const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const lengthInput = document.getElementById("length")


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers= "0123456789"
const symbols = "!@#$%^*&_+-=:'>?<,."

const allCharacters = upperCase + lowerCase + numbers + symbols
const characters = upperCase + lowerCase + numbers

function withSymbols(){
    const length = parseInt(lengthInput.value)
    let passwordOne = ""
    let passwordTwo = ""

    passwordOne += upperCase[Math.floor(Math.random() * upperCase.length)]
    passwordOne += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    passwordOne += numbers[Math.floor(Math.random() * numbers.length)]
    passwordOne += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > passwordOne.length) {
        passwordOne += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    password1.value = passwordOne
    password2.value = passwordTwo


    passwordTwo += upperCase[Math.floor(Math.random() * upperCase.length)]
    passwordTwo += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    passwordTwo += numbers[Math.floor(Math.random() * numbers.length)]
    passwordTwo += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > passwordTwo.length) {
        passwordTwo += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    password1.value = passwordOne
    password2.value = passwordTwo
}
function withoutSymbols(){
    const length = parseInt(lengthInput.value)
    let passwordOne = ""
    let passwordTwo = ""
    passwordOne += upperCase[Math.floor(Math.random() * upperCase.length)]
    passwordOne += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    passwordOne += numbers[Math.floor(Math.random() * numbers.length)]

    while (length > passwordOne.length) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
    }

    passwordTwo += upperCase[Math.floor(Math.random() * upperCase.length)]
    passwordTwo += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    passwordTwo += numbers[Math.floor(Math.random() * numbers.length)]

    while (length > passwordTwo.length) {
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    password1.value = passwordOne
    password2.value = passwordTwo
}




function copyPassword1(){
    password1.select()
    document.execCommand("copy")
}
function copyPassword2(){
    password2.select()
    document.execCommand("copy")
}

