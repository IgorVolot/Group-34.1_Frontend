function addTask(){
    // Получаем значение из текстового поля 
    const taskText = document.getElementById ("taskInput").value;

    if (taskText.trim() === ""){
        alert("Пожалуйста введите текст задачи");
        return;
    }
    //Создаем новый элемент списка
     const taskItem = document.createElement("li")
     taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Удалить</button>`;

     document.getElementById("taskList").appendChild(taskItem);
     document.getElementById("taskInput").value = "";

}
function removeTask(button){
    // Удалить родительский элемент li при клике на кнопку "Удалить"

    const taskItem = button.parentElement;
    taskItem.remove();
}