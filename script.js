const conversionRates = {
    area: {
        squaremetre: 1,
        squarekilometre: 0.000001,
        squarecentimetre: 10000
    },
    length: {
        metre: 1,
        kilometre: 0.001,
        centimetre: 100
    },
    currency: {
        inr: 1,
        usd: 0.012,
        eur: 0.011
    },
    weight: {
        gram: 1,
        kilogram: 0.001,
        pound: 0.00220462
    },
    temperature: {
        celsius: {
            toKelvin: (value) => value + 273.15,
            toFahrenheit: (value) => (value * 9/5) + 32,
            fromKelvin: (value) => value - 273.15,
            fromFahrenheit: (value) => (value - 32) * 5/9
        },
        kelvin: {
            toCelsius: (value) => value - 273.15,
            toFahrenheit: (value) => (value - 273.15) * 9/5 + 32,
            fromCelsius: (value) => value + 273.15,
            fromFahrenheit: (value) => (value - 32) * 5/9 + 273.15
        },
        fahrenheit: {
            toCelsius: (value) => (value - 32) * 5/9,
            toKelvin: (value) => (value - 32) * 5/9 + 273.15,
            fromCelsius: (value) => (value * 9/5) + 32,
            fromKelvin: (value) => (value - 273.15) * 9/5 + 32
        }
    },
    speed: {
        metrepersecond: 1,
        kilometrepersecond: 0.001,
        speedoflight: 3.336641e-9
    }
};

function convert() {
    const type = document.querySelector('h3').innerText.toLowerCase().split(' ')[0];
    const inputValue = parseFloat(document.querySelector('input').value);
    const unitFrom = document.getElementById('select1').value;
    const unitTo = document.getElementById('select2').value;

    let result;

    if (type === 'temperature') {
        if (unitFrom === unitTo) {
            result = inputValue;
        } else {
            result = conversionRates[type][unitFrom]['to' + capitalize(unitTo)](inputValue);
        }
    } else {
        result = inputValue * conversionRates[type][unitTo] / conversionRates[type][unitFrom];
    }

    document.getElementById('output').textContent = `Result: ${result}`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
