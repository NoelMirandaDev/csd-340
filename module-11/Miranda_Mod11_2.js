/*JavaScript for Miranda_Mod11_2.html*/

// Declared empty array 
let listArray = [];

// Function to add an element to array
function addToArray() {
    const inputTextField = document.getElementById("inputTextField"); // first text field 
    const inputValue = inputTextField.value.trim(); // user input with whitespace trimmed

    if (inputValue) {
        listArray.push(inputValue); // adds to array
        alert(`List Item: "${inputValue}" was added to position ${listArray.length}`); // alert pop-up message
        inputTextField.value = ""; // resets the text field to display placeholder text
    } else { // if no value was typed in the text field
        alert("Oops! \n\nThere was no list item detected in the text field. \nPlease enter a value before adding to your list.");
    }
}

// Function to delete the last element of the array
function deleteLastEntry() {
    if (listArray.length > 0) {
        const lastItemPosition = listArray.length; // deleted item number displayed to user
        const removedElement = listArray.pop(); // deletes the last element in array and returns it
        displayArrayElements(); // automatically updates display of list after deleting an element from list
        alert(`You have deleted item ${lastItemPosition} from list. \nThe item included: "${removedElement}"`);
    } else { //  if no elements in list to delete, alert pop-up message
        alert("The list is currently empty, therefore there is nothing else to delete.");
    }
}

// Function to display all the elements of the array
function displayArrayElements() {
    const displayContainer = document.getElementById("displayContainer"); // element to display array elements

    if (listArray.length > 0) { 
        // adds all elements to a let variable to then easily add to the displayContainer
        let displayContent = "YOUR TO DO LIST <br><br>";

        // for loop to iterate through all elements in array
        for (let i = 0; i < listArray.length; i++) {
            displayContent += (i + 1) + ". " + listArray[i] + "<br>";
        }

        displayContainer.innerHTML = displayContent; // adds all the elements to the specified paragraph in html document

    } else { // empty list
        displayContainer.innerHTML = "Your To Do list is currently empty, therefore there is nothing to display. <br>Write into the text field to add items to your list.";
    }
}

// Function to delete an element from the array specified by the user through index number
function deleteByItemNum() {
    const inputTextField2 = document.getElementById("indexInputTextField"); // second text field 
    const inputValue2 = inputTextField2.value.trim(); // user input with whitespace trimmed

    if (listArray.length > 0 ) {
        if (inputValue2 > 0 && inputValue2 <= listArray.length) { // verifies if user value within range of list elements
            let splicedElement = listArray.splice(inputValue2 - 1, 1)[0]; // removes element user specified by index (splice removes and rearranges array to avoid gaps)
            inputTextField2.value = ""; // resets the text field to display placeholder text
            displayArrayElements(); // automatically updates display of list after deleting an element from list
            alert(`You have deleted item ${inputValue2} from list. \nThe item included: "${splicedElement}"`);
        } else { // if out of range
            alert("Oops! \n\nThe item number entered is out of range. Please type a number within the range of the To Do list.");
        }
    } else { // if no elements in list to delete, alert pop-up message
        alert("The list is currently empty, therefore there is nothing else to delete.");
    }
}