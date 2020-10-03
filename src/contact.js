function contacts() {
    const conDiv = document.createElement('div'); //Main div
    const h3 = document.createElement('h3'); //Page heading
    const phoneNumber = document.createElement('p'); //info on restaurant
    const email = document.createElement('p');
    const facebook = document.createElement('p');

    h3.innerHTML = 'You can find us here:'; //set text of heading
    phoneNumber.innerHTML = "(555)-555-5555" //set text of info paragraph
    email.innerHTML = "email@example.com"
    facebook.innerHTML = "Facebook.com/example"
    conDiv.appendChild(h3); //append heading to div
    conDiv.appendChild(phoneNumber); //append paragraph to div
    conDiv.appendChild(email);
    conDiv.appendChild(facebook);
    

    return conDiv;
}

export default contacts();