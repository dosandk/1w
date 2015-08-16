var viewProduct = App.defineScope('Views');

viewProduct.Product = function(config) {
    if (!(this instanceof viewProduct.Product)) {
        return new viewProduct.Product(config);
    }

    var view = this;

    view.template = '';

    var initialize = function() {
        view.render();
    };

    var render = function() {
        console.error('render');
    };

    view.initialize = config.initialize || initialize;

    view.render = config.render || render;

    view.parsedTpl = function(product) {
        return view.template
            .replace('<%= product.name %>', product.name)
            .replace('<%= product.price %>', product.price)
            .replace('<%= product.discount %>', product.discount)
            .replace('<%= product.discountValue %>', product.discountValue);
    };

    view.getTemplate = function(callbackSuccess) {

        App.utils.ajax(function(response) {
            view.template = response;

            if (typeof callbackSuccess === 'function') {
                callbackSuccess();
            }
        });
    };

    view.initialize();
};

