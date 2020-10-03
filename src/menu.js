const lunchArr = [
    'Burger - $12',
    'French Fries - $3',
    'Side Salad - $5'
];
const dinnerArr = [
    'Burger - $12',
    'French Fries - $3',
    'Side Salad - $5'
];

function menu() {
    const menu = document.createElement('div'); //Main div
    const dinnerHeading = document.createElement('h2'); //Dinner heading
    let dinnerList = document.createElement('ul');

    let main = document.createElement('li');
    let side = document.createElement('li');
    let salad = document.createElement('li');
    
    let arr = [
        main, side, salad
    ]

    dinnerHeading.innerHTML = "Dinner" //set text of dinnerHeading
    menu.appendChild(dinnerHeading); //append dinnerHeading to div
    for (let i=0;i<arr.length;i++) {
        arr[i].innerHTML = lunchArr[i];
    }
    dinnerList.appendChild(main);
    dinnerList.appendChild(side);
    dinnerList.appendChild(salad);
    menu.appendChild(dinnerList);
    

    return menu;
}

export default menu();