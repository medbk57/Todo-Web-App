// Get DOM elements for input container and field
const inputContainer = document.querySelector(".new-task");
const inputField = document.getElementById("task-input");

// Add focus effect to input container
inputField.addEventListener("focus", () => {
    inputContainer.classList.add("focus");
});

// Remove focus effect when input loses focus
inputField.addEventListener("blur", () => {
    inputContainer.classList.remove("focus");
});

// Get DOM elements for task creation
const newTaskBtn = document.getElementById("new-task-btn");
const tasksList = document.querySelector(".tasks-list");

// Handle new task creation
newTaskBtn.addEventListener("click", () => {
    const inputValue = inputField.value;
    const errorMsg = document.querySelector(".error");

    // Show error if input is empty
    if (inputValue.trim() === "") {
        errorMsg.classList.add("show");
        // Hide error message after 2 seconds
        setTimeout(() => {
            errorMsg.classList.remove("show");
        }, 2000)
    } else {
        // Create new task item elements
        const newItem = document.createElement("li");
        newItem.className = "new-item";
        
        // Create and add check circle icon
        const circleIcon = document.createElement("i");
        circleIcon.className = "check-icon bx bx-circle";
        newItem.appendChild(circleIcon);
        
        // Create and add task text
        const newText = document.createElement("span");
        newText.className = "task-text";
        newText.textContent = inputValue;
        newItem.appendChild(newText);
    
        // Create and add delete icon
        const trashIcon = document.createElement("i");
        trashIcon.className = "bx bx-trash trash-icon";
        newItem.appendChild(trashIcon);

        // Toggle task completion on click
        newItem.addEventListener("click", () => {
            circleIcon.classList.toggle("bx-circle");
            circleIcon.classList.toggle("bxs-check-circle");
            newText.classList.toggle("checked");
        })
    
        // Handle task deletion
        trashIcon.addEventListener("click", (event) => {
            event.stopPropagation();  // Prevent click from bubbling up to newItem
            newItem.remove();
        });
            
        // Add new task to list and clear input
        tasksList.appendChild(newItem);
        inputField.value = "";
    }
});
