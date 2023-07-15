//DEFINE DISPLAY AND EVALUATION SCREEN
const answerDisplay = document.querySelector('.answer')
const expressionDisplay = document.querySelector('.expression')

//DEFINE CURRENT VALUE, PREVIOUS VALUE, EXPRESSION BEING EVALUATED
let currValue = ""
let prevValue = ""
let expression = []

//DEFINE VALUE FUNCTION
function value(num) {
    //SHOW IN EXPRESSION DISPLAY
    expressionDisplay.textContent += `${num}`
    //ADD TO CURRENT VALUE STRING
    currValue += `${num}`
}

//DEFINE NUMBERS
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')

//ADD EVENT LISTENERS TO NUMBERS
one.addEventListener('click', () => { value(1) })
two.addEventListener('click', () => { value(2) })
three.addEventListener('click', () => { value(3) })
four.addEventListener('click', () => { value(4) })
five.addEventListener('click', () => { value(5) })
six.addEventListener('click', () => { value(6) })
seven.addEventListener('click', () => { value(7) })
eight.addEventListener('click', () => { value(8) })
nine.addEventListener('click', () => { value(9) })
zero.addEventListener('click', () => { value(0) })
