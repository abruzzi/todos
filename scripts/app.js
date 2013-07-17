$(document).ready(function() {
    var todos = [];

    var todos_view = $("#todos ul");

    $('#item').keypress(function(event) {
        if(event.keyCode == 13) {
            todos.push($(this).val());
            todos_view.trigger("data-ready", [todos]);
            $(this).val("").focus();
            return false;
        }
        return true;
    });

    todos_view.on("data-ready", function(event, data) {
        todos_view.html("");
        console.log(data);
        data.forEach(function(item) {
            var li = $("<li>");
            li.text(item);
            todos_view.append(li);
        });
    })
});
