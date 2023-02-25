const express = require('express');

const router = express.Router();

const controller = require('../controller/todo.controller')
router.post('/',controller.addTodo )

module.exports = router