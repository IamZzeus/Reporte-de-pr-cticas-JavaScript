class Vehiculo{
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarInfo() {
        return (`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}
const miVehiculo = new Vehiculo('Toyota', 'Corolla');

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    alert(miVehiculo.mostrarInfo());
});

class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }
    mostrarPuertas() {
        return (`El coche tiene ${this.puertas} puertas`);
    }
}
const miCoche = new Coche('Honda', 'Civic', 4);

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
    alert(miCoche.mostrarInfo());
    alert(miCoche.mostrarPuertas());
});

class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.llantas = 2;
    }
    mostrarLlantas() {
        return (`La moto tiene ${this.llantas} llantas`);
    }
}

const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {
    const miMoto = new Moto('Yamaha', 'MT-07', 2);
    alert(miMoto.mostrarInfo());
    alert(miMoto.mostrarLlantas());
});
class Urbanero extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.cantidad = "capacidad para un salon de sistemas y el profe";
    }
    mostrarCantidad() {
        return (`El urbanero tiene ${this.cantidad}`);
    }
}

const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
    const miUrbanero = new Urbanero('Chevrolet', 'N300', 7);
    alert(miUrbanero.mostrarInfo());
    alert(miUrbanero.mostrarCantidad());
});
