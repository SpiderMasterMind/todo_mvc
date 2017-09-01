var TodoList = Backbone.Collection.extend({
	model: Todo,	
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		this.on("toggleCompletion", this.toggleCompletedState.bind(this));
		this.on("delete", this.delete.bind(this));
	},
	delete: function(id) {
		console.log("deleting: ", id);
		this.remove(id);
	},
	toggleCompletedState: function(id) {
		var clickedTodo = this.get(id);
		clickedTodo.set({ "Completed": !clickedTodo.get("Completed") });

		//if theres no longer an ELEMENT on the screen, and it is uncompleted we can 'reset' the highlighter
		//// this takes care of Completed sub headings
		// need a rule for rendering Completed if empty
		// move this to nav view?
		if (($(".completed_todos").find("dd:contains('" + clickedTodo.toJSON().Date + "')").length === 0) && clickedTodo.get("Completed") === false) {
			console.log("needs reset") // unless its the last of the 'Completed' heading
		}


		// if we have deleted an item we do the same, AND for the ALL todos list
	},
	returnFilteredCollection: function(date, showAllTodos) {
		if (date === "All Todos") {
			return this.toJSON();
		} else if (date === "Completed") {
			return this.returnOnlyCompleted();
		} else if (showAllTodos) {
			return this.returnAllTodosFromDate(date);
		} else if (!showAllTodos) {
			return this.returnCompletedTodosByDate(date);
		}
	},
	returnOnlyCompleted: function() {
		return this.filter(function(todo) {
				return todo.get("Completed") === true;
		}).map(function(todo) { return todo.toJSON() } );
	},
	returnAllTodosFromDate: function(dateStr) {
		return this.filter(function(todo) {
			return todo.get("Date") === dateStr;
		}).map(function(todo) { return todo.toJSON() });
	},
	returnCompletedTodosByDate: function(dateStr) {
		return this.filter(function(todo) {
			return todo.get("Date") === dateStr && todo.get("Completed") === true;
		}).map(function(todo) { return todo.toJSON() });
	},
	getTodosTotal: function() {
		return this.length;
	},
	getTodosComplete: function() {
		if (this.completedTodos.length === 0) {
			return "0"
		}

		return this.countBy(function(todo) {
			return todo.get("Completed") === true;
		})[true];
	},
	// maybe change the word 'parse'
	parseTodosByDate: function() {
		this.allGroupedTodos = [];
		this.completedTodos = [];
		this.uncompletedTodos = [];


		var objs = this.groupBy(function(model) {
			return model.get("Completed") === true;
		});
		//debugger; sorts collection into {true: count, false: count}
		
		if (objs[true]) {
			this.groupCompletedTodos(objs[true]);
		}
		if (objs[false]) {
			this.groupUncompletedTodos(objs[false]);
		}
		if (this.length > 0) {
			this.groupAllTodos();
		}
	},
	groupCompletedTodos: function(todos) {
		todos.forEach(function(todo) {
			var todo_date = todo.toJSON()["Date"];

			if (this.dateInCompletedArray(todo_date)) {
				this.completedTodos.find(function(thing) {
    			return thing["Date"] === todo_date;
				})["Count"]++;
			} else {
				this.completedTodos.push({
					"Date": todo_date,
					"Count": 1,
				});
			}
		}.bind(this));
		// sets completed todos = [{date: count}, {date: count}, etc]
	},
	groupUncompletedTodos: function(todos) {
		todos.forEach(function(todo) {
			var todo_date = todo.toJSON()["Date"];
			if (this.dateInUncompletedArray(todo_date)) {
				this.uncompletedTodos.find(function(thing) {
					return thing["Date"] === todo_date;
				})["Count"]++;
			} else {
				this.uncompletedTodos.push({
					"Date": todo_date,
					"Count": 1,
				});
			}
		}.bind(this));
	// sets uncompleted todos [{date: count}, etc]
	}, 
	groupAllTodos: function() {
		this.forEach(function(todo) {
			var todo_date = todo.toJSON()["Date"];

			if (this.dateInArray(todo_date)) {
				this.allGroupedTodos.find(function(thing) {
					return thing["Date"] === todo_date;
				})["Count"]++;
			} else {
					this.allGroupedTodos.push({
						"Date": todo_date,
						"Count": 1,
					});
			}
		}.bind(this));
	},
	dateInCompletedArray: function(todo_date) {
		return this.completedTodos.some(function(grouped) {
    	return grouped["Date"] === todo_date;
		});
	},
	dateInUncompletedArray: function(todo_date) {
		return this.uncompletedTodos.some(function(grouped) {
    	return grouped["Date"] === todo_date;
		});
	},
	dateInArray: function(todo_date) {
		return this.allGroupedTodos.some(function(grouped) {
    	return grouped["Date"] === todo_date;
		});
	},
	
});

