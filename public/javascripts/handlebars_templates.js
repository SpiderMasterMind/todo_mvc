this["JST"] = this["JST"] || {};

this["JST"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "	<dl>		<dd>"
    + alias2(alias1((depth0 != null ? depth0.Date : depth0), depth0))
    + "</dd><!--		--><dt>"
    + alias2(alias1((depth0 != null ? depth0.Count : depth0), depth0))
    + "	</dl>";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<dl>	<dd>"
    + alias2(alias1((depth0 != null ? depth0.Date : depth0), depth0))
    + "</dd><!--	--><dt>"
    + alias2(alias1((depth0 != null ? depth0.Count : depth0), depth0))
    + "</dl>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"nav_todos\">	<img src=\"images/icon_todo.png\" alt=\"Todos_Icon\" />	<dl>		<dd id=\"nav_todos_heading\">All Todos</dd><!--		--><dt>"
    + alias4(((helper = (helper = helpers.total_count || (depth0 != null ? depth0.total_count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_count","hash":{},"data":data}) : helper)))
    + "</dt>	</dl>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.all_todos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"completed_todos\">	<img src=\"images/icon_completed.png\" alt=\"Todos_Icon\" />	<dl>		<dd id=\"completed_todos_heading\">Completed</dd><!--		--><dt>"
    + alias4(((helper = (helper = helpers.total_completed || (depth0 != null ? depth0.total_completed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_completed","hash":{},"data":data}) : helper)))
    + "</dt>	</dl>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.completed_todos : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});