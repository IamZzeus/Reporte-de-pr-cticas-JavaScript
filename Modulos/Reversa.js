function reversoSimple(s) {
    return s.split('').reverse().join('');
}

const reversa = document.getElementById('Ver-script');
reversa.addEventListener('click', () => {
    alert("El reverso de 'Hola Mundo' es: " + reversoSimple('Hola Mundo'));
});