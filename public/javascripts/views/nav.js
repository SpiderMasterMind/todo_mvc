var NavView = Backbone.View.extend({
	template: App.templates.nav,
	initialize: function(options) {
		this.render(options);
		this.listenTo(this.collection, "update change", this.render);
	},
	events: {
		"click dd": "processNavClick"
	},
	render: function(options) {

		this.collection.parseTodosByDate();
		this.$el.html(this.template({
			total_count: this.collection.getTodosTotal(),
			total_completed: this.collection.getTodosComplete(),
			all_todos: this.collection.allGroupedTodos,
			completed_todos: this.collection.completedTodos,
		}));
		
		this.highlightItem(options);

		return this;
	},
	highlightItem: function(options) {
		if (options.selectedIndex && options.inAllTodosList) {
			$(".nav_todos").children().eq(options.selectedIndex).addClass("selection");
		} else if (options.selectedIndex && !options.inAllTodosList) {
			$(".completed_todos").children().eq(options.selectedIndex).addClass("selection");
		} else {	
			$(".nav_todos").children().eq("1").addClass("selection");
		}
	},
	processNavClick: function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.highlightClickedArea(event.target);
		App.index = $(event.target).parent().index();
		App.date = $(event.target).text();
		App.showAll = this.targetIsInAllTodosArea(event.target);
		App.trigger("renderMain");
		App.trigger("renderHeading")
	},
	highlightClickedArea: function(target) {
		this.$("dl").removeClass("selection");
		$(target).closest("dl").addClass("selection");
	},
	targetIsInAllTodosArea: function(target) {
		if ($(target).attr("id") === "nav_todos_heading") { return true; }

		if ($(target).parent().siblings().eq("1").children("dd").attr("id") === "nav_todos_heading") {
			return true;
		} else {
			return false;
		}
	},
});
