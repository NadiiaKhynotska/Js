const button = document.querySelector('.input-container > button');
const input = document.querySelector('.input-container > input');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.classList.add('todo-task');
    deleteBtn.classList.add('delete-btn');
    li.innerText = input.value;

    if (li.innerText.length > 0) {
        deleteBtn.innerText = 'Delete';
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
    } else {
        li.removeChild(deleteBtn);
        list.removeChild(li);
    }


    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    })
});