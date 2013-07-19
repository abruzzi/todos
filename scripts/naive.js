(function() {
    var Naive = window.Naive = {};

    var Model = Naive.Model = function(options) {
        var defaults = {};
        this.options = _.extend(defaults, options);
        this.initialize.apply(this, arguments);
    }

    _.extend(Model.prototype, {
        add: function(item) {
            this.options.data.push(item);
            this.update();
        },
        remove: function(item) {
            this.options.data = _(this.options.data).reject(function(e) {
                return e === item;
            }); 
            this.update();
        },
        attach: function(view) {
            this.options.views.push(view);
        },
        detach: function(view) {
            this.options.views = _(this.options.views).reject(function(item) {
                return item.id === view.id;
            }); 
        },
        update: function() {
            _.each(this.options.views, function(item){
                item.notify(this);       
            }, this)
        },
        data: function() {
            return this.options.data;
        }
    });

    var View = Naive.View = function(options) {
        var defaults = {};
        this.options = _.extend(defaults, options); 
        this.id = _.uniqueId('naive_v_');
        this.initialize.apply(this, arguments);
    }

    _.extend(View.prototype, {
        notify: function(model) {
            this.options.model. = model;
            this.render();
        },
        render: function() {
            console.log(this.id + ':' + this.options.model.data());
        }
    })
})();

var Model = function(options) {//{{{
    this.options = options;
    this.options.views = options.views || [];
}

Model.prototype.add = function(item){
    this.options.data.push(item);
    this.update();
}

Model.prototype.remove = function(item){
    this.options.data = _(this.options.data).reject(function(e) {
        return e === item;
    }); 
    this.update();
}

Model.prototype.attach = function(view) {
    this.options.views.push(view);
}

Model.prototype.detach = function(view) {
    this.options.views = _(this.options.views).reject(function(item) {
        return item.id === view.id;
    }); 
}

Model.prototype.update = function() {
    _.each(this.options.views, function(item){
        item.notify(this);       
    }, this)
} 

Model.prototype.data = function() {
    return this.options.data;
}//}}}

var View = function(options) {//{{{
    this.options = options;
    this.id = _.uniqueId('naive_v_');
}

View.prototype.notify = function(model) {
    this.options.model =  model;
    this.render();
}

View.prototype.render = function() {
    console.log(this.id + ":" + this.options.model.data());
}//}}}
