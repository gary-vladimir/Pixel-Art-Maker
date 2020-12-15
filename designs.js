// creating empty variables
let xtiles = '';
let ytiles = '';
// function that creates n 'pixels' of size j where n is equal to xtiles * ytiles and j is equal to 600px/xtiles
function makeGrid(event) {
    event.preventDefault();
    //recive the user imput for size of the canvas
    ytiles = document.getElementById('inputHeight').value;
    xtiles = document.getElementById('inputWidth').value;
    //calculates the size of an individual 'pixel'
    let width = 600 / xtiles;
    let height = 600 / ytiles;
    //deleting the previous board
    document.querySelector('.container').innerHTML = '';
    //adding 'pixel' to the canvas
    for (let i = 0; i < Number(xtiles) * Number(ytiles); i++) {
        const pixel = document.createElement('div');
        let canvas = document.querySelector('.container');
        pixel.setAttribute('class', 'box');
        pixel.addEventListener('click', changeColor);

        pixel.style.height = height + 'px';
        pixel.style.width = width + 'px';

        canvas.appendChild(pixel);
    }
}
//function that changes the color of the 'pixel'
function changeColor(event) {
    let pixel = event.target || event.srcElement;
    pixel.style.backgroundColor = document.getElementById('colorPicker').value;
}
