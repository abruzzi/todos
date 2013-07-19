$(document).ready(function() {
    var todos = [
        "Hello",
        "Darkness",
        "My Old friend"
    ];

    var todosModel = new Naive.Model({
        data: todos
    });
 
    function createTodo(item) {
        var todo = new Naive.View({
            container: $("<li>"), 
            model: new Naive.Model(item)
        });
        todo.render = function() {
            var cont = $("<div>").addClass("todo");

            var content = $("<h3>").text(item);
            var closeButton = $("<span>").text("X");

            cont.append(content);
            cont.append(closeButton);

            todo.options.container.append(cont);
            return todo.options.container;
        }
        var cont = todo.render();
        cont.find("span").click(function(event){
            todosModel.remove(item);
        });
        return cont;
    }

    var todosView = new Naive.View({
        container: $("#todos ul"), 
        model: todosModel
    });

    todosView.render = function() {
        todosView.options.container.html("");
        todosView.options.model.data().forEach(function(item){
            var cont = createTodo(item);
            todosView.options.container.append(cont);
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

