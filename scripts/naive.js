(function() {
    var Naive = window.Naive = {};

    var Model = Naive.Model = function(options) {
        var defaults = {
            views: []
        };
        this.options = _.extend(defaults, options);
        if(this.initialize) {
            this.initialize.apply(this, arguments);
        }
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
        if(this.options.model) {
            this.options.model.attach(this);
        }
        this.id = _.uniqueId('naive_v_');
        if(this.initialize) {
            this.initialize.apply(this, arguments);
        }
    }

    _.extend(View.prototype, {
        notify: function(model) {
            this.options.model = model;
            this.render();
        },
        render: function() {
            console.log(this.id + ':' + this.options.model.data());
        }
    })
})();
