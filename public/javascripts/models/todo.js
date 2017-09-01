var Todo = Backbone.Model.extend({
	initialize: function() {
		if (!App.todoList) {
			App.todoList.lastId = 0;
		}

		this.set("id", last);
		App.todoList.lastId = App.todoList.lastId + 1;
		this.processDate();
	},
	defaults: function() {
		return {
			"Title": "",
			"Day": "",
			"Month": "",
			"Year": "",
			"Description": "",
			"Completed": false,
			"Date": "No Due Date",
		}
	},
	processDate: function() {

	},
});
