import component from './initial.js';
import './styles.css';
// app.js
import jTabs from 'jtabs';
var container = document.querySelector('.tabs-container');

jTabs({
    container      : container,
    buttons        : container.querySelectorAll('.btn-js'),
    tabs           : container.querySelectorAll('.tab-js'),
    activeBtnClass : 'btn-active-js',
    activeTabClass : 'tab-active-js'
});

document.getElementById('content').appendChild(component);