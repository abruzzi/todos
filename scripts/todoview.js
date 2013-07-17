function TodoView(item) {
    var cont = $("<div>").addClass("todo");

    var content = $("<h3>").text(item);
    var closeButton = $("<span>").text("X");

    cont.append(content);
    cont.append(closeButton);

    closeButton.click(function(){
        cont.remove();
    });

    return cont;
}
