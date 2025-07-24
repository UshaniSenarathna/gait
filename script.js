function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("taskList");
  const item = document.createElement("li");
  item.textContent = taskText;

  // Toggle task done/undone
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  list.appendChild(item);
  input.value = ""; // Clear input
}
