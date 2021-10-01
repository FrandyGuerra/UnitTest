const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return parseFloat(valueInDollar.toFixed(2));
}

const fromDollarToYen= function(valueInDollar){
    let valueInYen= (valueInDollar * 127.9)/1.2;
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound= function(valueInYen){
    let valueInpound= (valueInYen * 0.8)/127.9;
    return parseFloat(valueInpound.toFixed(2));
}

module.exports = { sum,fromEuroToDollar, fromDollarToYen,fromYenToPound };