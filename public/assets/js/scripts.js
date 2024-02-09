// public/assets/js/scripts.js

import Mesa from '../../../src/components/mesa/Mesa.js';
import PedidoForm from '../../../src/components/pedido/PedidoForm.js';

document.addEventListener('DOMContentLoaded', function() {
    const mesasContainer = document.getElementById('mesas');
    const pedidoFormContainer = document.getElementById('pedido-form-container');

    // Simulación de datos de mesas
    const mesasData = [
        { numero: 1, capacidad: 4 },
        { numero: 2, capacidad: 2 },
        { numero: 3, capacidad: 6 }
    ];

    // Mostrar las mesas en la interfaz
    function mostrarMesas() {
        mesasData.forEach(mesaData => {
            const mesa = new Mesa(mesaData.numero, mesaData.capacidad);
            mesasContainer.appendChild(mesa.elementoHTML);
        });
    }

    // Mostrar el formulario de pedido en la interfaz
    function mostrarFormularioPedido() {
        const pedidoForm = new PedidoForm();
        pedidoFormContainer.appendChild(pedidoForm.elementoHTML);
    }

    // Llamada a las funciones para mostrar las mesas y el formulario de pedido al cargar la página
    mostrarMesas();
    mostrarFormularioPedido();
});
