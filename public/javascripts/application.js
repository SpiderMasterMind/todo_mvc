// 3.5 - 4 hours (includes setup)
// // lost 45 mins ish on grunt handlebars confusion
// 14:10 Tuesday
// couldhave some global params to determine where the nav navigation option should stay
// with conditionals to change them if needed
// 
var App = {
	templates: JST,
	init: function() {
		console.log("!");
		//this.getTodos();
		this.bindEvents();
		this.renderNavView();
		this.renderMainView();
	},
	//getTodos: function() {
	//	this.collection = new TodoList([this.todoList]);
//	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);
		this.on("changeDisplayEvent", this.renderMainView.bind(this));
		this.on("renderNav", this.renderNavView.bind(this))
		//$(window).on("unload", this.setLocalStorage.bind(this));	
	},
//	setLocalStorage: function() {
//		localStorage.setItem("todos", JSON.stringify(this.todoList.toJSON()));
//		localStorage.setItem("id", JSON.stringify(this.todoList.currentId));
//	},
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

		this.navView = new NavView({
			collection: this.todoList,
			el: "nav"
		})
	},
}
