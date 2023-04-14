document.getElementById('post-comment-btn').addEventListener('click', function () {
    // Get the comment input value
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    // Check if the comment is not empty
    if (commentText.length > 0) {
        // Create a new comment element
        const newComment = document.createElement('p');
        newComment.textContent = commentText;

        // Add the new comment to the comments list
        const commentsList = document.getElementById('comments-list');
        commentsList.appendChild(newComment);

        // Clear the comment input
        commentInput.value = '';
    }
});