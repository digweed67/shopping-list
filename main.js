// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

/*console.log(list);
console.log(input);
console.log(button);*/

//Create a function that will run in response to the button being clicked.Inside the function body, start off by storing the current value of the input element in a variable.

button.addEventListener("click", addItem);

//Next, empty the input element by setting its value to an empty string — ''.
function addItem() {
    const inputValue = input.value; 
    input.value = "";
    console.log(inputValue);



//Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables

const li = document.createElement("li");
const span = document.createElement("span");
const delButton = document.createElement("button");

console.log(li);
//console.log(span);
//console.log(delButton);

//Append the span and the button as children of the list item.

li.appendChild(span);
li.appendChild(delButton);

//Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.

span.textContent = inputValue;
delButton.textContent = "Delete";

//Append the list item as a child of the list.
list.appendChild(li);

//Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).

delButton.addEventListener("click", delList)

function delList (){
    li.remove();
}

// Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

input.focus();

}










