document.getElementById('reservacion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('resultado').innerText = 'Reservación enviada con éxito.';
});
