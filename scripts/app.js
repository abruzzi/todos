$(document).ready(function() {
    $("#item-input").todoify({
        data: "/todos",
        dataKey: "description",
        container: "#item-todos"
    });

    $("#note-input").todoify({
        container: "#note-todos"
    });

     
    $("#thing-input").todoify({
        container: "#thing-todos",
        template: "<section class='todoItem'><header><%= todo %></header><a>remove</a></section>",
        renderItem: function(item) {
            var cont = this.renderTemplate(item);

            cont.find("a").click(function(event){
                cont.remove();
            });

            return cont;
        }
    });
});

