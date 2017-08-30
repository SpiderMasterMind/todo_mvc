var Heading = Backbone.View.extend({
	template: App.templates.heading,
	initialize: function(options) {
		this.render(options);
		//this.listenTo(this.collection, "update change", this.render);
	},
	render: function(options) {
		var $title = $("dl.selection").find("dd").text();
		var $count = $("dl.selection").find("dt").text().trim();
 
		this.$el.html(this.template({
			Title: $title,
			Count: $count,
		}));
	},
	//getCount: function() {
	//	console.log(this.selectedIndex());
	//},
	//getTitle: function() {
	//	console.log(this.inAllTodosList());
	//},
});
