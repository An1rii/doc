"use strict"
 function displayPostAndComments(postId) {
    getPostById(postId)
        .then(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            postContainer.appendChild(postElement);

            const commentsBtn = document.createElement('button');
            commentsBtn.innerText = 'Load comments';
            postContainer.appendChild(commentsBtn);

            commentsBtn.addEventListener('click', () => {
                getCommentsByPostId(postId)
                    .then(comments => {
                        const commentsList = document.createElement('ul');
                        comments.forEach(comment => {
                            const commentElement = document.createElement('li');
                            commentElement.innerHTML = `
                                <h3>${comment.name}</h3>
                                <p>${comment.body}</p>
                            `;
                            commentsList.appendChild(commentElement);
                        });
                        postContainer.appendChild(commentsList);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            });
        })
        .catch(error => {
            console.error(error);
        });
}
