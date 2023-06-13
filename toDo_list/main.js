const button = document.querySelector('.input-container > button');
const input = document.querySelector('.input-container > input');
const list = document.querySelector('.todo-list');

let store = JSON.parse(localStorage.getItem('todo-task')) || [];
// if (store.length !== 0) {
//     for (const storeElement of store) {
//         const li = document.createElement('li');
//         const deleteBtn = document.createElement('button');
//         deleteBtn.classList.add('delete-btn');
//         li.classList.add('todo-task');
//
//         li.innerText = storeElement;
//         deleteBtn.innerText = 'Delete';
//
//         li.appendChild(deleteBtn);
//         list.appendChild(li);
//
//         deleteBtn.addEventListener('click', key => {
//             list.removeChild(li);
//             let start = store.indexOf(storeElement)
//             console.log(start)
//             store.splice(start,1)
//             console.log(store)
//             localStorage.setItem('todo-task', JSON.stringify(store))
//         })
//     }
// }
button.addEventListener('click', () => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.classList.add('todo-task');
    deleteBtn.classList.add('delete-btn');
    li.innerText = input.value;

    if (li.innerText.length > 0) {
        deleteBtn.innerText = 'Delete';
        store.push(input.value);
        localStorage.setItem('todo-task', JSON.stringify(store))

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
    } else {
        li.removeChild(deleteBtn);
        list.removeChild(li);
    }


    // deleteBtn.addEventListener('click', key => {
    //         list.removeChild(li);
    //
    // })
    store = JSON.parse(localStorage.getItem('todo-task'))
   for (const storeElement of store) {

        deleteBtn.addEventListener('click', key => {
            list.removeChild(li);
            let start = store.indexOf(storeElement)

            store.splice(start,1)
            localStorage.setItem('todo-task', JSON.stringify(store))
        })

    }

});

for (const storeElement of store) {

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.classList.add('todo-task');
    deleteBtn.classList.add('delete-btn');
    li.innerText = storeElement;
    deleteBtn.innerText = 'Delete';
    li.appendChild(deleteBtn);
    list.appendChild(li);

    deleteBtn.addEventListener('click', key => {
            list.removeChild(li);
            let start = store.indexOf(storeElement)

            store.splice(start,1)

            localStorage.setItem('todo-task', JSON.stringify(store))
        })

}