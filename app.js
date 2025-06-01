const sum = (a, b) => {
    return a + b;
};

console.log(sum(7, 3));

const fromEuroToDollar = function (valueInEuro) {
    return valueInEuro * 1.07;
};

const fromDollarToYen = function (valueInDollar) {
    return valueInDollar * 146.26;
};

const fromYenToPound = function (valueInYen) {
    return valueInYen * 0.00556;
};


module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
