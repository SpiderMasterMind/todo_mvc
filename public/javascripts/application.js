var App = {
	templates: JST,
	init: function() {
		console.log("!");
		this.renderNavView();
		//this.getTodos();
	},
	//getTodos: function() {
	//	this.collection = new TodoList([this.todoList]);
	//},
	renderNavView: function() {
		if (this.navView) { this.navView.undelegateEvents(); }
			// todoList comes from passing from layout
		this.navView = new NavView({
			collection: this.todoList,
			// only one set of models, so one "pseudo collection" not sure if I should wrP this in a BB collection or not.
			el: "nav"
		})
	},
}
