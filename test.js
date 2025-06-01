const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require('./app.js');
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
});

test("One Dollar should be 146.26 Yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const expected = 3.5 * 146.26;
    expect(fromDollarToYen(3.5)).toBe(expected);
});

test("One Yen should be 0.00556 Pound", function () {
    const { fromYenToPound } = require('./app.js');
    const expected = 3.5 * 0.00556;
    expect(fromYenToPound(3.5)).toBe(expected);
});
