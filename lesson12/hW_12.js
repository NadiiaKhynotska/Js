// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL(location.href)
console.log(url.pathname)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user-div');

            let idDiv = document.createElement('div');
            idDiv.classList.add('id-div');

            let userNameDiv = document.createElement('div');
            userNameDiv.classList.add('userName-div');

            let wrap = document.createElement('div');
            wrap.classList.add('wrap')

            let btnMore = document.createElement('button');
            btnMore.classList.add('btn-more');

            let a = document.createElement('a')


            a.href = 'user-details.html?id=' + JSON.stringify(user.id)
            btnMore.innerText = 'Get full information';

            idDiv.innerText = user.id;
            userNameDiv.innerText = user.name;
            a.appendChild(btnMore)

            wrap.append(idDiv, userNameDiv);
            userDiv.append(wrap, a);
            document.body.append(userDiv);
            // document.body.appendChild(a);

        })

    })