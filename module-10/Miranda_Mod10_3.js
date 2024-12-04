/*JavaScript for Miranda_Mod10_3.html*/

function displayDonkey(id) {
    var image = document.getElementById(id);
    image.src = "Donkey_Small.jpeg";
    image.style.objectPosition = "center"; /* new objectPosition for new image when clicked */
}    

function displayBoxAgain(id) {
    var image = document.getElementById(id);
    image.src = "Mystery_Boxes.png";
    image.style.objectPosition = ""; /* resets the objectPosition to its position given in css */
}

function displayMoneyBag(id) {
    var image = document.getElementById(id);
    image.src = "Money_Bag_Small.jpeg";
    image.style.objectPosition = "center"; /* new objectPosition for new image when clicked */
}