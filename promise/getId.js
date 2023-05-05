"use strict"
function getPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch post.');
            }
            return response.json();
        });
}
