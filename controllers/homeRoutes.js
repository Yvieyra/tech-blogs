const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');
//require all models

//what to put in homeRoutes..