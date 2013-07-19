(function($){
    $.fn.todoify = function(options) {
        var settings = $.extend({
            data: [],
            container: "body",
            itemClass: "todo",
            renderItem: function(item) {
                var cont = $("<div>").addClass(this.itemClass);
                var content = $("<h3>").text(item);
                var closeBtn = $("<span>").text("X");

                cont.append(content);
                cont.append(closeBtn);

                closeBtn.click(function(event){
                    cont.remove();
                });
                return cont;
            }
        }, options);

        var render = function(item) {
            var cont = settings.renderItem(item);
            $(settings.container).append(cont);
        }

        settings.data.forEach(function(item){
            render(item);
        })

        $(this).keypress(function(event){
            if(event.keyCode == 13) {
                var item = $(this).val();
                render(item);
                $(this).val("").focus();
            }
        });

        return this;
    }
}(jQuery));

