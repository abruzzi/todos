$.fn.todoify = function(options) {
    var settings = $.extend({
        data: [],
        dataKey: null,
        template: "<div class='todo'><h3><%= todo %></h3><span>X</span></div>",
        container: "body",
        renderTemplate: function(item) {
            return $(_.template(this.template, {todo: item}));
        },
        renderItem: function(item) {
            var cont = this.renderTemplate(item);
            cont.find("span").click(function(event) {
                cont.remove();
            });
            return cont;
        }
    }, options);

    var render = function(item) {
        var cont = settings.renderItem(item);
        $(settings.container).append(cont);
    };

    var renderAll = function(data) {
        data.forEach(function(item){
            render(item);
        });
    };
    
    if(_.isArray(settings.data)) {
        renderAll(settings.data);
    } else {
        $.ajax({
            url: settings.data,
            success: function(data) {
                renderAll(settings.dataKey ? _.pluck(data, settings.dataKey) : data);
            }
        });
    }

    $(this).keypress(function(event){
        if(event.keyCode == 13) {
            var item = $(this).val();
            render(item);
            $(this).val("").focus();
        }
    });

    return this;
};

