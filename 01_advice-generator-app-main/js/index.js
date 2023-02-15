// selectors
const adviceId= document.getElementById("adviceId")
const adviceText= document.getElementById("adviceText")
const diceButton= document.getElementById("diceButton")

// event listeners
diceButton.addEventListener("click", getAdvice)


// function
async function getAdvice(){
    const res= await fetch("https://api.adviceslip.com/advice")
    const {slip}= await res.json()
    const {id,advice}=slip

    adviceId.innerText=id
    adviceText.innerText=`" ${advice} "`
}