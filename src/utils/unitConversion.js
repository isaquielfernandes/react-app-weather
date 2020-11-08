export function kelvinToCelcius(tempKelvin) {
  return Math.round(tempKelvin - 273.15);
}

export function celciusToFahrenheit(tempCelcius) {
  return Math.round(tempCelcius * (9 / 5) + 32);
}

export function fahrenheitToCelcius(tempFahrenheit) {
  return Math.round(((tempFahrenheit - 32) * 5) / 9);
}

export function kmToMile(km) {
  return Math.round(km / 1.60934);
}

export function mileToKm(mile) {
  return Math.round(mile * 1.60934);
}
