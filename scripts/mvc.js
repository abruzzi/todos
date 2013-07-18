//model
function Model(data) {
    this.data = data;
    this.views = [];
}

Model.prototype.onChange = function(data) {
    this.data = data;
    this.views.forEach(function(item){
        item.notify(new Model(data));
    });
}

Model.prototype.attach = function(view) {
    this.views.push(view);
}

Model.prototype.getData = function() {
    return this.data;
}

Model.prototype.add = function(element) {
    this.data.push(element);
    this.onChange(this.data);
}

Model.prototype.remove = function(element) {
    this.data = $.grep(this.data, function(item) {
        return element != item;
    });

    this.onChange(this.data);
}

//view
function View(container, model) {
    this.container = container;
    this.model = model;
    this.model.attach(this);

    return this;
}

View.prototype.getModel = function() {
    return this.model;
}

View.prototype.notify = function(data) {
    this.model = data;
    this.refresh();
}

View.prototype.refresh = function() {
    this.render();
}

