App.defineScope('Views.Product', function(config) {
    if (!(this instanceof App.Views.Product)) {
        return new App.Views.Product(config);
    }

    var view = this;

    view.template = '';
    view.templates = config.templates;
    view.templateName = './templates/products-list.tpl';

    var initialize = function() {
        view.render();
    };

    var render = function() {
        console.error('render');
    };

    view.initialize = config.initialize || initialize;

    view.render = config.render || render;

    view.beforeRender = function() {
        var self = this;

        self.getTemplate(function () {
            self.render();
        });
    };

    view.parsedTpl = function(product) {
        return view.template
            .replace('<%= product.name %>', product.name)
            .replace('<%= product.price %>', product.price)
            .replace('<%= product.discount %>', product.discount)
            .replace('<%= product.discountValue %>', product.discountValue);
    };

    view.getTemplate = function(callbackSuccess) {
        var self = this;

        App.utils.ajax({
            url: self.templateName,
            callbackSuccess: function(response) {
                view.template = response;
                callbackSuccess();
            }
        });
    };

    view.initialize();
});