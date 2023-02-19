const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#blog-comment').value.trim();
  
    if (comment_text) {
      const response = await fetch(`/api/blogs/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blog');
      }
    }
  };

  document
  .querySelector('.btn')
  .addEventListener('click', newCommentHandler);  