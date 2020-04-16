window.onload = iMain;

function iMain() {
    var gridContainer = document.getElementById('grid-container');

    for (let i = 0; i != 16*16; i ++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-tile');
        gridContainer.appendChild(newDiv);
    }

    var allTiles = gridContainer.querySelectorAll('.grid-tile');
    console.log(allTiles);
    allTiles.forEach(function(tile) {
        tile.addEventListener('click', () => {
            console.log('box clicked');
        });
    });

}


