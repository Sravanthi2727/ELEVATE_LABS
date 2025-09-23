// Select DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add event listener to Add button
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

// Function to add a new task
function addTask(text) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = text;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.className = "complete-btn";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(buttonsDiv);
  taskList.appendChild(li);
}
