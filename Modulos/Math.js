// math.js
export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
export const multiplicacion = (a, b) => a * b;
export const division = (a, b) => a / b;

const Ver = document.getElementById('Ver-calculos');
Ver.addEventListener('click', () => {
    alert("La suma es: " + suma(5, 3) + "\nLa resta es: " + resta(5, 3) + "\nLa multiplicacion es es: " + multiplicacion(5, 3) + "\nLa divicion es: " + division(6, 3));
});