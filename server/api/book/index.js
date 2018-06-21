'use strict';

var express = require('express');
var controller = require('./book.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/booklist',auth.isAuthenticated(), controller.index);
router.get('/booksearch',auth.isAuthenticated(), controller.search);
router.get('/:id',auth.isAuthenticated(), controller.show);
router.post('/bookcreate',auth.isAuthenticated(), controller.create);
router.get('/approve/book/:id',auth.isAuthenticated(), controller.verified);
router.put('/:id',auth.isAuthenticated(), controller.update);
router.patch('/:id',auth.isAuthenticated(), controller.update);
router.delete('/:id',auth.isAuthenticated(), controller.destroy);

module.exports = router;