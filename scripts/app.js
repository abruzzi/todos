$(document).ready(function() {
    var todos = [
        "和西安Office的同事们分享jQuery和Jasmine",
        "找客户那边的BA确认RCA-1101的需求",
        "让高亮还钱"
    ];

    $("#item-input").todoify({
        data: todos,
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

