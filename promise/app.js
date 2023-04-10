const searchBtn = document.getElementById('searchBtn');
const postIdInput = document.getElementById('postId');
const postContainer = document.getElementById('post');

function getPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch post.');
            }
            return response.json();
        });
}

function getCommentsByPostId(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch comments.');
            }
            return response.json();
        });
}

searchBtn.addEventListener('click', () => {
    const postId = postIdInput.value;
    postContainer.innerHTML = '';

    if (postId >= 1 && postId <= 100) {
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
});
