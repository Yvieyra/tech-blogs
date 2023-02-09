module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY, will need to blog posts and comments 
      return date.toLocaleDateString();
    },
};