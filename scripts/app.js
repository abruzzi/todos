$(document).ready(function() {
    var todos = [
        "Hello",
        "World",
        "Darkness"
    ];

    var todosModel = new Model(todos);
 
    var todoView = new View($("#todos ul"), todosModel);
    todoView.render = function() {
        todoView.container.html("");
        this.model.getData().forEach(function(item){
            var todo = new View($("<li>"), new Model(item));
            todo.render = function() {
                var cont = $("<div>").addClass("todo");

                var content = $("<h3>").text(item);
                var closeButton = $("<span>").text("X");

                cont.append(content);
                cont.append(closeButton);

                closeButton.click(function(){
                    cont.remove();
                });

                todo.container.append(cont);
                return todo.container;
            }
            todo.container.find("span").click(function(event){
                todoView.model.remove(item);
            });
            todoView.container.append(todo.render());
        })
    }

    todoView.render();

    $('#item').keypress(function(event) {
        if(event.keyCode == 13) {
            todos.push($(this).val());
            todoView.render();
            $(this).val("").focus();
            return false;
        }
        return true;
    });

});


