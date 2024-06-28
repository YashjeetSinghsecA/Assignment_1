document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('comment-name');
      const messageTextarea = document.getElementById('comment-message');
  
      const name = nameInput.value;
      const message = messageTextarea.value;
  
      if (name.trim() === '' || message.trim() === '') {
        alert('Please enter your name and comment.');
        return;
      }
  
      // Create new comment item
      const newComment = document.createElement('li');
      newComment.innerHTML = `<strong>${name}</strong>: ${message}`;
      commentList.appendChild(newComment);
  
      // Clear input fields after submission
      nameInput.value = '';
      messageTextarea.value = '';
    });
 
  