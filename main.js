const input = document.querySelector('input');
const addBtn = document.querySelector('#addBtn');
const deleteBtnAll = document.querySelector('#deleteBtnAll');
let nrTask = 0;

const addTask = () => {
    let task = input.value;
    if (task) {
        const li = document.createElement("li");
        document.querySelector('.tasks ul').appendChild(li);
        document.querySelector('.tasks h2').textContent = `Number of tasks: ${++nrTask} `;
        li.textContent = `${nrTask}. ${task}`;
    }
    else alert('Enter the text');
    input.value = "";
}

const deleteTask = (e) => {
    document.querySelector('.tasks ul').removeChild(e.target);
    document.querySelector('.tasks h2').textContent = `Number of tasks: ${--nrTask} `;
}

const deleteAllTasks = () => {
    document.querySelector('.tasks ul').textContent = "";
    nrTask = 0;
    document.querySelector('.tasks h2').textContent = `Number of tasks: ${nrTask}`;
}

const enter = (e) => {
    if (e.keyCode === 13) addTask();
}

deleteBtnAll.addEventListener('click', deleteAllTasks);
addBtn.addEventListener('click', addTask);
document.addEventListener('keydown', enter);
document.querySelector('.tasks ul').addEventListener('click', deleteTask);