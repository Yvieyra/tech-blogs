const {Blog} = require ('../models');

const blogData = 
[
    {
      "title": "Blog",
      "content": "Technology 2023",
      "user_id": 1 
    }
  ]

  const seedBlog = () => Blog.bulkCreate(blogData);

  module.exports = seedBlog
  