var TodoList = Backbone.Collection.extend({
	initialize: function() {
		this.lastId = 0;
		this.bindEvents();
	},
	model: Todo,
	bindEvents: function() {
		this.on("toggleCompletion", this.toggleCompletedState.bind(this));
	},
	toggleCompletedState: function(id) {
		var clickedTodo = this.get(id);
		clickedTodo.set({ "Completed": !clickedTodo.get("Completed") });
	},
});

