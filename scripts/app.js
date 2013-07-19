$(document).ready(function() {
    var todos = [
        "Hello",
        "Darkness",
        "My Old friend"
    ];

    var todosModel = new Model(todos);
 
    function createTodo(item) {
        var todo = new View($("<li>"), new Model(item));
        todo.render = function() {
            var cont = $("<div>").addClass("todo");

            var content = $("<h3>").text(item);
            var closeButton = $("<span>").text("X");

            cont.append(content);
            cont.append(closeButton);

            todo.container.append(cont);
            return todo.container;
        }
        var cont = todo.render();
        cont.find("span").click(function(event){
            todosModel.remove(item);
        });
        return cont;
    }

    var todosView = new View($("#todos ul"), todosModel);
    todosView.render = function() {
        todosView.container.html("");
        todosView.model.getData().forEach(function(item){
            var cont = createTodo(item);
            todosView.container.append(cont);
        });
    }

    todosView.render();

    $('#item').keypress(function(event) {
        if(event.keyCode == 13) {
            todosModel.add($(this).val());
            todosView.render();
            $(this).val("").focus();
            return false;
        }
        return true;
    });

});

