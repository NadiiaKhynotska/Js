const usersDiv = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userDiv = document.createElement('div');
            const wrap = document.createElement('div');
            const idDiv = document.createElement('div');
            const nameDiv = document.createElement('div');
            const btn = document.createElement('button');
            const a = document.createElement('a');

            usersDiv.classList.add('users-box', 'center');
            userDiv.classList.add('user-box', 'center');
            wrap.classList.add('user-wrapper', 'center');
            idDiv.classList.add('userId-box', 'center');
            btn.classList.add('user-full-information');
            nameDiv.classList.add('center');

            idDiv.innerText = user.id;
            nameDiv.innerText = user.name;
            btn.innerText = `Get full information`;
            a.href = `../users-details/users-details.html?id=` + JSON.stringify(user.id);

            a.appendChild(btn);
            wrap.append(idDiv, nameDiv);
            userDiv.append(wrap, a);
            usersDiv.appendChild(userDiv);
        })

        document.body.appendChild(usersDiv);
    })
