/* JavaScript code for Miranda_Mod12_2.html */

const listObject = document.getElementById("topTenBooksList"); // stores order list element as an object

// Function to rearrange list from top to bottom (numerically)
function topToBottom() { 
    const listItems = Array.from(listObject.children); // list items from order list object stored in array

    if (listItems[0].textContent === "1. Atomic Habits") {
        alert("Oops!\nIt seems like the list is already arranged from top to bottom.\n" +
            "Perhaps try the other button to see if such outcome is what you seek.");
    } else {
        listObject.innerHTML = ""; // clears the list
        listItems.reverse(); // reverses the array elements
        listItems.forEach(bookTitle => listObject.appendChild(bookTitle)); // adds the elements back to the list object
    }
}

// Function to rearrange list from bottom to top (numerically)
function bottomToTop() {
    const listItems = Array.from(listObject.children);

    if (listItems[0].textContent === "10. The Power of Now") {
        alert("Oops!\nIt seems like the list is already arranged from bottom to top.\n" +
            "Perhaps try the other button to see if such outcome is what you seek.");
    } else {
        listObject.innerHTML = ""; // clears the list
        listItems.reverse() // reverses the array elements
        listItems.forEach(bookTitle => listObject.appendChild(bookTitle)); // adds the elements back to the list object
    }
}
