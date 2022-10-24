//1M = 3.28084Ft

let metresFeet = 3.28084
//1L = 0.264172Gn

let litreGallons = 0.264172
//1Kg = 2.20462Pounds

let kiloPounds = 2.20462
//handling ipnuts

const initialValue = document.getElementById("number-input")
const convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener('click', function() {
    const toConvert = parseInt(initialValue.value)

    // object
    const convertedNumbers = {
        len:  toConvert * metresFeet,
        lenInFeet: toConvert / metresFeet,
        vol: toConvert * litreGallons,
        volInGallons: toConvert / litreGallons,
        weight:  toConvert * kiloPounds,
        wInPounds: toConvert / kiloPounds
    }


    // rendering results to two dp
    function displayInTwoDp(n){
        return n.toFixed(2)
    }
   


    //outputs/rendering the outputs
    const length = document.getElementById('length')
    length.innerHTML = `${toConvert} metres = ${ displayInTwoDp(convertedNumbers.len)} feet || ${toConvert} feet = ${displayInTwoDp(convertedNumbers.lenInFeet)} metres ` 

    const volume = document.getElementById('volume')
    volume.innerHTML = `${toConvert} litres = ${displayInTwoDp(convertedNumbers.vol)} Gallons || ${toConvert} Gallons = ${displayInTwoDp(convertedNumbers.volInGallons)} litres`

    const weight = document.getElementById('mass')
    weight.innerHTML = `${toConvert} kilos = ${displayInTwoDp(convertedNumbers.weight)} Pounds || ${toConvert} Pounds = ${displayInTwoDp(convertedNumbers.wInPounds)} kilos`
    return convertedNumbers
})





























