import component from './initial.js';
import './styles.css';

/* Not sure if I need this since it's not in an element I'm appending.

import Background from './src/images/burgers.jpg'
const myBackground = new Image();
myBackground.src = Background; 

*/

document.getElementById('content').appendChild(component);