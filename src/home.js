import hours from './hours.js'

function component() {
    const homeContent = document.createElement('div'); //Main div
    const h1 = document.createElement('h1'); //Page heading
    const homeInfo = document.createElement('p'); //info on restaurant

    h1.innerHTML = 'Best Burgers In Town!'; //set text of heading
    homeInfo.innerHTML = "Welcome to the Best Burgers In Town!" //set text of info paragraph
    homeContent.appendChild(h1); //append heading to div
    homeContent.appendChild(homeInfo); //append paragraph to div
    homeContent.appendChild(hours());

    return homeContent;
}

export default component();