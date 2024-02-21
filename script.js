const celsiusEl = document.getElementById("celsius")
const kelvinEl = document.getElementById("kelvin");
const fahrenheitEl = document.getElementById("fahrenheit");

function convertTemp() {


  //converting from celsius to fahrenheit and kelvin
  celsiusEl.oninput = function () {
    let fah = (parseFloat(celsiusEl.value) * 9) / 5 + 32;
    fahrenheitEl.value = parseFloat(fah.toFixed(2));
    let kel = parseFloat(celsiusEl.value) + 273.15;
    kelvinEl.value = parseFloat(kel.toFixed(2));

    setTimeout(() => {
      clearTimeout =
        fahrenheitEl.value = "";
      kelvinEl.value = "";
      celsiusEl.value = "";
    }, 3500)
  }


  //converting from kelvin to celsius and fahrenheit
  kelvinEl.oninput = function () {
    let cel = parseFloat(kelvinEl.value) - 273.15
    celsiusEl.value = parseFloat(cel.toFixed(2))
    let fah = ((parseFloat(kelvinEl.value) - 273.15) * 9) / 5 + 32;
    fahrenheitEl.value = parseFloat(fah.toFixed(2));

    setTimeout(() => {
      clearTimeout = kelvinEl
      celsiusEl.value = "";
      fahrenheitEl.value = "";
      kelvinEl.value = "";
    }, 3500)
  }


  //converting from fahrenheit to celsius and kelvin
  fahrenheitEl.oninput = function () {
    let cel = ((parseFloat(fahrenheitEl.value) - 32) * 5) / 9;
    celsiusEl.value = parseFloat(cel.toFixed(2))
    let kel = ((parseFloat(fahrenheitEl.value) - 32) * 5) / 9 + 273.15;
    kelvinEl.value = parseFloat(kel.toFixed(2));

    setTimeout(() => {
      clearTimeout = fahrenheitEl.oninput;
      celsiusEl.value = "";
      kelvinEl.value = "";
      fahrenheitEl.value = "";
    }, 3500)
  }

}
convertTemp()