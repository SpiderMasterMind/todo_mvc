var MainView = Backbone.View.extend({
	template: App.templates.main,
	initialize: function(options) {
		// options.date is string "08/14" "No Due Date"
		// options.showAllTodos is boolean, if true show all, if false remove incomplete
		this.listenTo(this.collection, "update change", this.render);
		this.render(options.date, options.showAllTodos);
	},
	render: function(date, showAllTodos) {
		if (!date && !showAllTodos) {
			this.$el.html(this.template({
				todos: this.collection.toJSON(),
			}));
		} else {
			this.$el.html(this.template({
				todos: this.returnFilteredCollection(date, showAllTodos),
			}));
		}

		this.sortTodosByComplete();
		this.markCompleteTodos();

		return this;
	},
	events: {
		"click .toggle": "toggleTodoCompletion"


	},
	toggleTodoCompletion: function(event) {
		event.preventDefault();
		var clickedId = $(event.target).find("input").attr("id");
		this.collection.trigger("toggleCompletion", clickedId);
		App.trigger("changeDisplayEvent");
		App.trigger("renderNav");
	},
	markCompleteTodos: function() {
		$("[data-completed='true']").next().addClass("completed");
	},
	sortTodosByComplete: function() {
		
	},
	// these should be collection methods
	returnFilteredCollection: function(date, showAllTodos) {
		if (date === "All Todos") {
			return this.collection.toJSON();
		} else if (date === "Completed") {
			return this.returnOnlyCompleted();
		} else if (showAllTodos) {
			return this.returnAllTodosFromDate(date);
		} else if (!showAllTodos) {
			return this.returnCompletedTodosByDate(date);
		}
	},
	returnOnlyCompleted: function() {
		return this.collection.filter(function(todo) {
				return todo.get("Completed") === true;
		}).map(function(todo) { return todo.toJSON() } );
	},
	returnAllTodosFromDate: function(dateStr) {
		return this.collection.filter(function(todo) {
			return todo.get("Date") === dateStr;
		}).map(function(todo) { return todo.toJSON() });
	},
	returnCompletedTodosByDate: function(dateStr) {
		return this.collection.filter(function(todo) {
			return todo.get("Date") === dateStr && todo.get("Completed") === true;
		}).map(function(todo) { return todo.toJSON() });
	},


});
