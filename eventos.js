document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('container');

    container.addEventListener('click', divGreet);
})

function buttonGreet(event) {
    alert('Hola!');
    event.stopPropagation();
}

function divGreet() {
    alert('Hola! Soy el div');
}