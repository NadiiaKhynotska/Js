let url = new URL(location.href);
let postId = url.searchParams.get('postId');
new Promise((resolve) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            console.log(post)
            const postDiv = document.createElement('div');
            const title = document.createElement('h2');
            const postBody = document.createElement('p');
            const postId = post.id;

            postDiv.classList.add('post-info-box', 'center');

            title.innerText = `post №${post.id} Title: ${post.title}`;
            postBody.innerText = post.body;
            postDiv.append(title, postBody);
            document.body.appendChild(postDiv);
            resolve(postId);
        })
})
    .then((postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                console.log(comments)
                const commentsDiv = document.createElement('div');
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    const commentTitle = document.createElement('h3');
                    const commentEmail = document.createElement('h4');
                    const commentBody = document.createElement('p');

                    commentsDiv.classList.add('comments-box');
                    commentDiv.classList.add('comment-box');

                    console.log(comment.email)

                    commentTitle.innerText = `Title:${comment.name}`;
                    commentEmail.innerText = comment.email;
                    commentBody.innerText = comment.body;


                    commentDiv.append(commentTitle, commentEmail, commentBody);
                    commentsDiv.appendChild(commentDiv);
                })


                document.body.appendChild(commentsDiv);
            })
    })

