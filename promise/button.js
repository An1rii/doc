 "use strict"
 function createCommentsBtn(){
     searchBtn.addEventListener('click', () => {
         const postId = postIdInput.value;
         postContainer.innerHTML = '';

         if (postId >= 1 && postId <= 100) {
             displayPostAndComments(postId);
         }
     });
 }
