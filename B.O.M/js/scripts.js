/*Create variables to hold references to user input,
button element, and the list element.*/
//Saves the input element to a variable
const input = document.getElementById("favchap");

//Saves the button element to a variable
const button = document.getElementById("button");

//Saves the list element to a variable
const list = document.getElementById("list");

/*A click event that listens for the "Add Chapter" button*/
button.addEventListener("click", function() {
    let inputLen = input.value;
    if (inputLen.length > 0)
    {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        li.innerHTML = inputLen;
        deleteBtn.textContent = "❌";
        li.appendChild(deleteBtn);
        list.appendChild(li);

        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
        });
        input.value = "";
        input.focus();
    }
});