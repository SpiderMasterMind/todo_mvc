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
				todos: this.collection.returnFilteredCollection(date, showAllTodos),
			}));
		}

		this.markCompleteTodos();

		return this;
	},
	events: {
		"click .toggle": "toggleTodoCompletion"

	},
	toggleTodoCompletion: function(event) {
		// ref!
		event.preventDefault();
		var clickedId = $(event.target).find("input").attr("id");
		var currentSelection = $("dl.selection").index();
		var selectionInAllTodos = $(".selection").parent().hasClass("nav_todos") 
	// if a completed clicked todo is the last of the group	
		this.collection.trigger("toggleCompletion", clickedId);
		App.trigger("renderMain");
		App.trigger("renderNav", currentSelection, selectionInAllTodos);
		App.trigger("renderHeading");
	},

	markCompleteTodos: function() {
		$("[data-completed='true']").next().addClass("completed");
	},
});
