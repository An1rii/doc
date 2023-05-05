"use strict"
function getCommentsByPostId(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch comments.');
            }
            return response.json();
        });
}
