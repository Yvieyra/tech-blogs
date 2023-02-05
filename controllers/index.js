const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes); //may not need 
router.use('/api', apiRoutes);

module.exports = router;