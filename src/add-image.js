import Stockolmo from './stockolmo.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Stockolmo';
    img.height = 300;
    img.src = Stockolmo;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;