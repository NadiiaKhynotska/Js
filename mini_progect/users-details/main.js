let url = new URL(location.href);
let userId = (url.searchParams.get('id'));
let btn = document.createElement('button');
btn.classList.add('get-post-btn');
btn.innerText = 'post of current user';
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userBox = document.createElement('div');
        userBox.classList.add('user-info-box');
        document.body.appendChild(userBox);

        contentWriter(user)

        function contentWriter(obj) {
            const ul = document.createElement('ul');
            userBox.appendChild(ul);

            for (const key in obj) {
                if (typeof obj[key] !== 'object') {
                    const li = document.createElement('li');
                    li.innerText = `${key} : ${obj[key]}`;
                    ul.appendChild(li);
                } else {
                    const p = document.createElement('p');
                    p.classList.add('description');
                    p.innerText = `${key} `
                    userBox.appendChild(p)
                    contentWriter(obj[key]);

                }
            }
        }

        document.body.append(btn);
    })
btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postBox = document.createElement('div');
            postBox.classList.add('post-box');

            posts.forEach(post => {
                const wrapper = document.createElement('div');
                const title = document.createElement('h3');
                const postBtn = document.createElement('button');
                const a = document.createElement('a');
                let postId = post.id
                console.log(postId  )
                wrapper.classList.add('post-wrapper');
                postBtn.classList.add('post-btn');
                a.classList.add('post-a');

                title.innerText = post.title;
                postBtn.innerText = 'get post details';
                a.href = `../post-details/post-details.html?postId=` + JSON.stringify(post.id);


                a.appendChild(postBtn);
                wrapper.append(title, a);
                postBox.appendChild(wrapper);
            })
            document.body.append(postBox);
        })
}

