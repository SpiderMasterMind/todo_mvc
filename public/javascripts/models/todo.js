var Todo = Backbone.Model.extend({
	defaults: {
		"Title": "",
		"Day": "",
		"Month": "",
		"Year": "",
		"Description": "",
		"Completed": false,
		"Date": "No Due Date"
	}
});
