// 3.5 - 4 hours (includes setup)
// // lost 45 mins ish on grunt handlebars confusion
var App = {
	templates: JST,
	init: function() {
		console.log("!");
		this.bindEvents();
		this.renderNavView();
		this.renderMainView();
		//this.getTodos();
	},
	//getTodos: function() {
	//	this.collection = new TodoList([this.todoList]);
	//},
	bindEvents: function() {
		_.extend(this, Backbone.Events);
		this.on("changeDisplayEvent", this.renderMainView.bind(this));
	//$(window).on("unload", this.setLocalStorage.bind(this));	
	},
	renderMainView: function(date, showAll) {
		if (this.mainView) { this.mainView.undelegateEvents(); }

		this.mainView = new MainView({
			collection: this.todoList,
			el: ".main_table",
			date: date,
			showAllTodos: showAll
		})
	},
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
