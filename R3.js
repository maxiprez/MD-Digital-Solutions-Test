const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

//Evento que abre el modal
open.addEventListener('click', () => {
    modal_container.classList.add('show');
    // console.log('hiciste clic');
})

//Evento para cerrar el modal
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    document.getElementById('video').pause(); //Cuando se cierra el modal, se pausa el video
})

//Evento que cierra el modal cuando se hace click afuera
window.onclick = function(event) {
    if (event.target == modal_container) {
        modal_container.classList.remove('show');
        document.getElementById('video').pause(); //Cuando se cierra el modal, se pausa el video
    }
  }