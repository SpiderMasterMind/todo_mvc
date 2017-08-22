var NavView = Backbone.View.extend({
	template: App.templates.nav,
	initialize: function() {
		// this one think about it and future
		// refactor parse method
		// events: highlight on click, and trigger main view to do stuff, or trigger App to control main view
		this.allGroupedTodos = [];
		this.completedTodos = [];
		this.uncompletedTodos = [];
		this.render();
		$(".nav_todos").children().eq("1").addClass("selection");
		this.listenTo(this.collection, "update change", this.render);
	},
	events: {
		"click dd": "processNavClick"
	},
	render: function() {
		this.parseTodosByDate();
		this.$el.html(this.template({
			total_count: this.getTodosTotal(),
			total_completed: this.getTodosComplete(),
			all_todos: this.allGroupedTodos,
			completed_todos: this.completedTodos,
		}));

		return this;
	},
	processNavClick: function(event) {
		event.preventDefault();
		this.highlightClickedArea(event.target);
		App.trigger("changeDisplayEvent", $(event.target).text(), this.targetIsInAllTodosArea(event.target));
	},
	highlightClickedArea: function(target) {
		this.$("dl").removeClass("selection");
		$(target).closest("dl").addClass("selection");
	},
	getTodosTotal: function() {
		return this.collection.length;
	},
	targetIsInAllTodosArea: function(target) {
		if ($(target).attr("id") === "nav_todos_heading") { return true; }

		if ($(target).parent().siblings().eq("1").children("dd").attr("id") === "nav_todos_heading") {
			return true;
		} else {
			return false;
		}
	},
	getTodosComplete: function() {
		return this.collection.countBy(function(todo) {
			return todo.get("Completed") === true;
		})[true];
	},
	parseTodosByDate: function() {
		var objs = this.collection.groupBy(function(model) {
			return model.get("Completed") === true;
		});

		objs[true].forEach(function(todo) {
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

	objs[false].forEach(function(todo) {
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

	this.collection.forEach(function(todo) {
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
