// Look at collection methods 
// sorting things in nav
// deletion
// adding new todo
//
var App = {
	templates: JST,
	init: function() {
		this.todoList;
		this.date = "All Todos";
		this.index = 1;
		this.showAll = true;
		this.getTodos();
		this.bindEvents();
		this.renderNavView();
		this.renderMainView();
		this.renderHeading();
	},
	getTodos: function() {
		this.todoList = new TodoList(localStorage.getItem("todos"));
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);
		this.on("renderMain", this.renderMainView.bind(this));
		this.on("renderNav", this.renderNavView.bind(this));
		this.on("renderHeading", this.renderHeading.bind(this));
		this.on("renderModal", this.renderModal.bind(this));
		this.on("saveTodo", this.saveTodo.bind(this));
		$(window).on("unload", this.setLocalStorage.bind(this));	
	},
	setLocalStorage: function() {
		localStorage.setItem("todos", JSON.stringify(this.todoList.toJSON()));
	},
	saveTodo: function(todoObj) {
		this.todoList.add(new Todo(todoObj));
	},
	renderModal: function(todoId) {
		if (this.modalView) { this.modalView.undelegateEvents(); }
		
		if (todoId) {
			this.modalView = new ModalView({
				el: ".background",
				model: this.todoList.get(todoId),
			})
		} else {
			this.modalView = new ModalView({
				el: ".background",
			})
		}
	},
	renderMainView: function() {
		if (this.mainView) { this.mainView.undelegateEvents(); }

		this.mainView = new MainView({
			collection: this.todoList,
			el: ".main_table",
			date: this.date,
			showAllTodos: this.showAll
		})
	},
	renderNavView: function(selectedIndex, selectedInAllTodosList) {
		if (this.navView) { this.navView.undelegateEvents(); }

		this.index = selectedIndex;
		this.showAll = selectedInAllTodosList;
		this.navView = new NavView({
			collection: this.todoList,
			el: "nav",
			selectedIndex: this.index,
			inAllTodosList: this.showAll,
		});
	},
	renderHeading: function() {
		//console.log("rendering Heading", this.date, this.index, this.showAll)
		
		if (this.headingView) { this.headingView.undelegateEvents(); }

		this.headingView = new Heading({
			collection: this.todoList,
			el: ".info_bar",
			date: this.date,
			inShowAll: this.showAll,
		});
	},
}
