var ModalView = Backbone.View.extend({
	template: App.templates.modal,
	initialize: function() {
		this.render();
	},
	events: {
		"click": "removeModal",
		"click #save": "saveTodo",
	},
	render: function() {
		this.$el.css("display", "block");
		if (this.model) {
			this.$el.html(this.template(this.model.toJSON()));
		} else {
			this.$el.html(this.template());
		}
			
		this.populateDatePlaceholders();
	},
	saveTodo: function(event) {
		event.preventDefault();
		var fieldsObject = _.object(_.map(this.$("form").serializeArray(), function(inputField) {
			return [inputField.name, inputField.value];
		}));
		App.trigger("saveTodo", fieldsObject);
	},
	removeModal: function(event) {
		if ($(event.target).attr("class") === "background") {
			App.trigger("removeModal");
			this.$el.fadeOut("fast")	
		} else {
			return;
		}
	},
	populateDatePlaceholders: function() {
		$.each(this.$(".chosen"), function() {
			if ($(this).text().length === 0) {
				$(this).text($(this).attr("placeholder"));
    	}
		})
	},
		

});
