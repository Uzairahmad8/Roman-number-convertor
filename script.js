
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', function() {
    const numberInput = document.getElementById('number').value;
    // if there's some text along with number, then only get the intergar from it.
    const number = parseInt(numberInput);

    // conditions 
    // 1) if not a number then print "Please enter a valid number"; ( there's no need for this condition here, because I handled it in HTML )
    // 2) if entered number is less than 1, print accordingly.
    // 3) if entered number is greater than 3999, print accordingly.
    // 4) else convert the number to roman and display it.
    if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = convertToRoman(number);
    }
});

function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            result += key;
            num -= romanNumerals[key];
        }
    }

    return result;
}
