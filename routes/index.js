var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var filePath = path.resolve(path.dirname(__dirname), "data/todos.json");
var router = express.Router();


function getTodoItems() {
	return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { todos: getTodoItems() });
});

module.exports = router;
