
const F = 3.28084
const G = 3.785
const K = 2.20462



let numberInput = document.getElementById("number-input")
let convertBtn = document.getElementById("convert-btn")
let lengthConverted = document.getElementById("length")





convertBtn.addEventListener("click", function() {
    
    const numberToBeConverted = numberInput.value
    let meters = numberToBeConverted * F
    let feet = numberToBeConverted / F

    console.log("Clicked");
    console.log(numberInput.value)
    
       //create a function that converts the user input 
lengthConverted.textContent = `${numberToBeConverted}  metres = ${meters.toFixed(2)} feet || ${numberToBeConverted} feet =  ${feet.toFixed(2)}metres`
// volumeEl.textContent = numberEl + "litres = " + getLitres() + "gallons || " + numberEl + " gallons = " + getGallons() + "litres"
// massEl.textContent = numberEl + "kilos = " + getKilos() + "pounds || " + numberEl + " pounds = " + getPounds() + "kilos"

// LENGTH





function getFeet() {
    let feet = numberInput / F
    return feet.toFixed(3)
}

// // VOLUME
// function  getLitres() {
//     let litres = numberEl / G
//     return litres.toFixed(3)
// }
// function  getGallons() {
//     let gallons = numberEl *  G
//     return gallons.toFixed(3)
// }

// //MASS
// function getKilos() {
//     let kilos = numberEl * K
//     return kilos.toFixed(3)
// }

// function getPounds() {
//     let pounds = numberEl / K
//     return pounds.toFixed(3)
// }
})












