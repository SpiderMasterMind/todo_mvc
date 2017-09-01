this["JST"] = this["JST"] || {};

this["JST"]["heading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span id=\"main_heading\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</span><span id=\"main_count\">"
    + alias4(((helper = (helper = helpers.Count || (depth0 != null ? depth0.Count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Count","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["main"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<tr>		<td class=\"toggle\">			<input type=\"checkbox\" name=\""
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-completed=\""
    + alias4(((helper = (helper = helpers.Completed || (depth0 != null ? depth0.Completed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Completed","hash":{},"data":data}) : helper)))
    + "\">			<label class=\"item\" for=\"\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Date","hash":{},"data":data}) : helper)))
    + "</label>		</td>		<td class=\"delete\"><img src=\"images/icon_trash.png\" alt=\"Trash_Icon\" /></td>	</tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<thead>	<th>Add new to do</th>	<td></td></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>";
},"useData":true});

this["JST"]["modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"form\">		<form action=\"POST\" method=\"POST\">			<fieldset>				<div class=\"form_title\">					<label for=\"title\">Title</label>					<input type=\"text\" name=\"Title\" id=\"title\" maxlength=\"127\" placeholder=\"Item1\" value=\""
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + "\" />				</div>				<div class=\"form_date\">					<label for=\"date\">Due Date</label>						<div class=\"select_style\">							<select name=\"Day\" id=\"day\">								<option value=\"\" class=\"chosen\" placeholder=\"Day\">"
    + alias4(((helper = (helper = helpers.Day || (depth0 != null ? depth0.Day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Day","hash":{},"data":data}) : helper)))
    + "</option>								<option value=\"01\">1</option>								<option value=\"02\">2</option>								<option value=\"03\">3</option>								<option value=\"04\">4</option>								<option value=\"05\">5</option>								<option value=\"06\">6</option>								<option value=\"07\">7</option>								<option value=\"08\">8</option>								<option value=\"09\">9</option>								<option value=\"10\">10</option>								<option value=\"11\">11</option>								<option value=\"12\">12</option>								<option value=\"13\">13</option>								<option value=\"14\">14</option>								<option value=\"15\">15</option>								<option value=\"16\">16</option>								<option value=\"17\">17</option>								<option value=\"18\">18</option>								<option value=\"19\">19</option>								<option value=\"20\">20</option>								<option value=\"21\">21</option>								<option value=\"22\">22</option>								<option value=\"23\">23</option>								<option value=\"24\">24</option>								<option value=\"25\">25</option>								<option value=\"26\">26</option>								<option value=\"27\">27</option>								<option value=\"28\">28</option>								<option value=\"29\">29</option>								<option value=\"30\">30</option>								<option value=\"31\">31</option>							</select>						</div>						<span class=\"date-separator\">/</span>						<div class=\"select_style\">							<select name=\"Month\" id=\"month\">								<option value=\"\" class=\"chosen\" placeholder=\"Month\">"
    + alias4(((helper = (helper = helpers.Month || (depth0 != null ? depth0.Month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Month","hash":{},"data":data}) : helper)))
    + "</option>								<option value=\"01\">January</option>								<option value=\"02\">February</option>								<option value=\"03\">March</option>								<option value=\"04\">April</option>								<option value=\"05\">May</option>								<option value=\"06\">June</option>								<option value=\"07\">July</option>								<option value=\"08\">August</option>								<option value=\"09\">September</option>								<option value=\"10\">October</option>								<option value=\"11\">November</option>								<option value=\"12\">December</option>							</select>						</div>						<span class=\"date-separator\">/</span>						<div class=\"select_style\">							<select name=\"Year\" id=\"year\">								<option value=\"\" class=\"chosen\" placeholder=\"Year\">"
    + alias4(((helper = (helper = helpers.Year || (depth0 != null ? depth0.Year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Year","hash":{},"data":data}) : helper)))
    + "</option> 								<option>2014</option>								<option>2015</option>								<option>2016</option>								<option>2017</option>								<option>2018</option>								<option>2019</option>								<option>2020</option>								<option>2021</option>								<option>2022</option>								<option>2023</option>								<option>2024</option>								<option>2025</option>							</select>						</div>					</div>					<div class=\"form_description\">						<label for=\"description\">Description</label>						<textarea name=\"Description\" rows=\"6\" cols=\"80\" placeholder=\"Description\" id=\"description\">"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</textarea>					</div>					<div class=\"submit_row\">						<button class=\"button\" id=\"save\">Save</button>						<button class=\"button\" id=\"complete\">Mark As Complete</button>					</div>			</fieldset>		</form>	</div>";
},"useData":true});

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