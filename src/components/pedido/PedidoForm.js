// components/pedido/PedidoForm.js

class PedidoForm {
    constructor() {
        this.elementoHTML = this.crearElementoHTML();
        this.cantidadPersonasInput = this.elementoHTML.querySelector('#cantidadPersonas');
        this.tomarPedidoBtn = this.elementoHTML.querySelector('#tomarPedidoBtn');
        this.tomarPedidoBtn.addEventListener('click', this.tomarPedido.bind(this));
    }

    crearElementoHTML() {
        const formElement = document.createElement('form');
        formElement.innerHTML = `
            <label for="cantidadPersonas">Cantidad de personas:</label>
            <input type="number" id="cantidadPersonas" min="1" value="1">
            <button type="button" id="tomarPedidoBtn">Tomar Pedido</button>
        `;
        return formElement;
    }

    tomarPedido() {
        const cantidadPersonas = parseInt(this.cantidadPersonasInput.value);
        const pedido = {
            cantidadPersonas: cantidadPersonas,
            items: [] // Aquí puedes agregar la lógica para obtener los elementos seleccionados en el pedido
        };
        alert(`Pedido tomado para ${cantidadPersonas} personas. ¡Gracias por su orden!`);
    }
}

export default PedidoForm;
