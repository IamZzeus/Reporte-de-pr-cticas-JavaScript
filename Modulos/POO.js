//Definicion de una clase
class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        return (`${this.nombre} hace ${this.sonido}`);
    }
}
//Creacion de un objeto (instancia de la clase Animal)
const perro = new Animal('Perro', 'Guau Guau');

// const btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', () => {
//     alert(perro.hacerSonido());//Salida: Perro hace Guau Gu
// });

//Calse derivada(subclase)
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'Guau Guau'); //Llamada al constructor de la clase base
        this.raza = raza;
    }
    mostrarRaza() {
        return (`La raza del perro es ${this.raza}`);
    }
}
const miPerro = new Perro('Max', 'Labrador');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    alert(miPerro.hacerSonido());//Salida: Perro hace Guau Gu
    alert(miPerro.mostrarRaza());//Salida: La raza del perro es Labrador
});

//Polimorfismo
class Gato extends Animal {
    constructor(nombre) {
        super(nombre, 'Miau Miau');
    }
    hacerSonido() {
        return (`${this.nombre} dice ${this.sonido}`);
    }
}
const animales = [new Perro('Rex', 'Pastor Alemán'), new Gato('Whiskers')];
//Recolectar los sonidos de un solo string
let salida = '';
animales.forEach(animal => {
    salida += animal.hacerSonido() + '\n';
});

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    alert(salida);
});