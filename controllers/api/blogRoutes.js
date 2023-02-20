const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//http://localhost:3001/api/blogs/
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({ //posts a new blog created by the user
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:3001/api/blogs/1
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({ //deletes a post created by the user only
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/blogs/comment
router.post('/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({ //posts a new comment created by the user
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;


