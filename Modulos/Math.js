// math.js
export const suma= (a, b) => a + b;
export const resta = (a, b) => a - b;
export const multiplicacion = (a, b) => a * b;
export const division = (a, b) => a / b;

const Ver = document.getElementById('Ver-calculos');
Ver.addEventListener('click', () => {
    alert(suma(5, 3)); // 8
    alert(resta(5, 3)); // 2
    alert(multiplicacion(5, 3));
    alert(division(6, 3)); // 2
});