const {Comment} = require ('../models');

const commentData =  [
    {
      "comment_text": "WOW!",
      "user_id": 1,
      "blog_id": 1
    }
  ]

  const seedComment = () => Comment.bulkCreate(commentData);

  module.exports= seedComment