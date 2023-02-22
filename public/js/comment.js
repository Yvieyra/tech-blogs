const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#blog-comment').value.trim();
    const blog_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    
    if (comment_text && blog_id) {
        const response = await fetch(`/api/blogs/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment_text, blog_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');//profile works 
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('.btn')
    .addEventListener('click', newCommentHandler);  