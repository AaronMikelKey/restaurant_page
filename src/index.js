import component from './home.js';
import './styles.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const myTabs = document.querySelectorAll('div.nav-tabs > a');
const panes = document.querySelectorAll('.tab-pane');
const tabAction = Object.keys(myTabs).map((tab)=>{
    myTabs[tab].addEventListener('click', (e)=>{

        makeInactive(myTabs);
        activateTab(e);
        makeInactive(panes);
        activateTabContent(e);

        e.preventDefault();
    });
});
//Makes a tab and it's content inactive
function makeInactive(items) {
    const content = Object.keys(items).map((item)=> {
        items[item].classList.remove('active');
    });
}

//Display the selected tab
function activateTab(e) {
    const clickedTab = e.currentTarget;
    clickedTab.classList.add('active');
}

//Display the selected tab content.
function activateTabContent(e) {
    const anchorReference = e.target;
    const activePaneId = anchorReference.getAttribute('href');
    const activePane = document.querySelector(activePaneId);
    activePane.classList.add('active');
}

//initial page
document.getElementById('home').appendChild(component);