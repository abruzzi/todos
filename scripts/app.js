$(document).ready(function() {
    var todos = [
        "Hello",
        "Darkness",
        "My Old friend"
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
        itemClass: "todoItem",
        renderItem: function(item) {
            var cont = $("<section>").addClass(this.itemClass);
            var hdr = $("<header>").text(item);
            var closeBtn = $("<a>").text("remove");

            cont.append(hdr);
            cont.append(closeBtn);

            closeBtn.click(function(event){
                cont.remove();
            });

            return cont;
        }
    });
});

