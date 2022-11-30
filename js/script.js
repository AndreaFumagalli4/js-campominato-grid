/**
 *  Creare i quadrati che riempino il field (ATT!! CREARLI NELL' ADDEVENTLISTENER perchè bisogna crearli quando l'utente clicca su play!!)
 */

// Contatore da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Creazione div
const gridContainer = document.querySelector('div.grid');

// const newSquare = document.createElement('div');

// gridContainer.appendChild(newSquare);

// create 100 divs
for (let i = 1; i <= 100; i++) {
    const newSquare = document.createElement('div');
    gridContainer.appendChild(newSquare);
}