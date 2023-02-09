const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment.js');

User.hasMany(Blog, {
    foreignKey: 'user_id',
});

Blog.hasMany(Comment, {
    foreignKey: 'user_id',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Blog, Comment };