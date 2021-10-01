const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.20); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dolar should be 106.583 Yen", function(){
    expect(fromDollarToYen(4)).toBe(426.33); 
});
 
test("One Yen should be 0.00625 pound", function(){
    expect(fromYenToPound(200)).toBe(1.25)
});