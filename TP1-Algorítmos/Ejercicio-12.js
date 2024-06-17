class Vehiculo {
    constructor (marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año
    }

    obetenerInformación() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año};`
    } 
}


class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obetenerInformación() {
        return `${super.obetenerInformación()}, Color: ${this.color}, Precio: $${this.precio}`;
    }
}

const miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
console.log("Información del Vehiculo:");
console.log(miVehiculo.obetenerInformación());

const miAutomovil = new Automovil("Fiat", "Cronos", 2020, "Rojo", 19864000);
console.log("Información del Automovil:");
console.log(miAutomovil.obetenerInformación());