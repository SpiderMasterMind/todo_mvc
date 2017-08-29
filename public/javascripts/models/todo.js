var Todo = Backbone.Model.extend({
	initialize: function() {
		this.set("id", this.collection.lastId);
		this.collection.lastId = this.collection.lastId + 1;
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
