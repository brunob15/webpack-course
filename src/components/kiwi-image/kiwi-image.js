import Stockolmo from './stockolmo.jpg';
import './kiwi-image.scss';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Stockolmo;
        img.alt = 'Stockolmo';
        img.classList.add('kiwi-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default KiwiImage;