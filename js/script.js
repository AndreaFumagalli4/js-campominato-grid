// Funzione per creare l'elemento

function getNewSqaure () {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square', 'd-flex');
    return newSquare;
}

const button = document.getElementById('button');

button.addEventListener('click', function(){

    const gridContainer = document.querySelector('div.grid');

    for (let i = 1; i <= 100; i++) {
        const newSquare = getNewSqaure();
        newSquare.innerHTML = `<span class="m-auto"> ${i} </span>`;
        newSquare.addEventListener('click', function(){
            console.log('Hai cliccato la casella ' + i);
            newSquare.classList.toggle('active');
        })
        gridContainer.appendChild(newSquare);
    }
})

