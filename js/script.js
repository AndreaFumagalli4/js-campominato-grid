/**
 *  Creare i quadrati che riempino il field (ATT!! CREARLI NELL' ADDEVENTLISTENER perchè bisogna crearli quando l'utente clicca su play!!)
 */

// Creazione div
const gridContainer = document.querySelector('div.grid');

// create 100 divs
for (let i = 1; i <= 100; i++) {
    const newSquare = document.createElement('div');
    // Aggiunta classe ai div creati
    newSquare.classList.add('square', 'd-flex');
    // Aggiunta numeri interi square
    newSquare.innerHTML = `<span class="m-auto"> ${i} </span>`;
    // Add click
    newSquare.addEventListener('click', function(){
        alert('Hai cliccato lo square');
    })
    gridContainer.appendChild(newSquare);
}