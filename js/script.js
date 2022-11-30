/**
 *  Creare i quadrati che riempino il field (ATT!! CREARLI NELL' ADDEVENTLISTENER perchè bisogna crearli quando l'utente clicca su play!!)
 */

// Mostro il riquadro di gioco quando l'utente clicca play

const button = document.getElementById('button');

button.addEventListener('click', function(){
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
            console.log('Hai cliccato la casella ' + i);
            newSquare.classList.toggle('active');
        })
        gridContainer.appendChild(newSquare);
    }
})

