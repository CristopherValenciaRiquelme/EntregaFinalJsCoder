// components/mesa/Mesa.js

// Esta función representa el componente de una mesa en la cafetería
class Mesa {
    constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
        this.elementoHTML = this.crearElementoHTML();
        this.elementoHTML.addEventListener('click', this.seleccionarMesa.bind(this));
    }

    // Método para crear el elemento HTML de la mesa
    crearElementoHTML() {
        const mesaElement = document.createElement('div');
        mesaElement.classList.add('mesa');
        mesaElement.textContent = `Mesa ${this.numero} - Capacidad: ${this.capacidad}`;
        return mesaElement;
    }

    // Método para seleccionar la mesa
    seleccionarMesa() {
        alert(`Mesa ${this.numero} seleccionada. ¿Qué desea ordenar?`);
    }
}

export default Mesa;
