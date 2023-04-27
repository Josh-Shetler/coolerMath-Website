document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the name and comment input values
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const commentText = commentInput.value.trim();

    // Check if the name and comment are not empty
    if (nameText.length > 0 && commentText.length > 0) {
        // Create a new comment element
        const newComment = document.createElement('div');
        const commentName = document.createElement('h3');
        const commentContent = document.createElement('p');
        commentName.textContent = nameText + ':';
        commentContent.textContent = commentText;
        newComment.appendChild(commentName);
        newComment.appendChild(commentContent);

        // Add the new comment to the comments list
        const commentsList = document.getElementById('comments-list');
        commentsList.appendChild(newComment);

        // Clear the name and comment inputs
        nameInput.value = '';
        commentInput.value = '';
    }
});
