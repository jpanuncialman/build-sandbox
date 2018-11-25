import message from './message';
import './index.scss';

console.log(message);
 
const paragraph = document.createElement('p');
paragraph.innerHTML = message;

document.body.prepend(paragraph);