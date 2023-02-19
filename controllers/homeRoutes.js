const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
//homeRoute endpoints

//http://localhost:3001/
router.get('/', async (req, res) => {
  try {

    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { //renders all blogs and content 
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/blogs/1
router.get('/blogs/:id', async (req, res) => { //does render one blog with comment button that has no functionality yet 
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/profile
router.get('/profile', withAuth, async (req, res) => { 
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', { //currently takes user to create a new blog and view only their existing blogs below 
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login'); //currently takes user to either login or sign up 
});

module.exports = router;

