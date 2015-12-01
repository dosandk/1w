App.defineScope('Routers.Router', function() {
    if (!(this instanceof App.Routers.Router)) {
        return new App.Routers.Router();
    }

    var router = this;

    router.routes = {
        '': 'main',
        '#product': 'product'
    };

    router.main = function() {
        console.error('main');

        App.Views.Product = App.Views.Product({
            defaultView: 'list',
            templates: {
                gridTemplate: './templates/products-grid.tpl',
                listTemplate: './templates/products-list.tpl'
            },
            initialize: function () {
                var self = this;

                var showListBtn = document.getElementById('show-list');
                var showGridBtn = document.getElementById('show-grid');

                showListBtn.addEventListener('click', function() {
                    console.error('show-list');
                    self.templateName = './templates/products-list.tpl';
                    self.beforeRender();
                });

                showGridBtn.addEventListener('click', function() {
                    console.error('show-grid');
                    self.templateName = './templates/products-grid.tpl';
                    self.beforeRender();
                });

                console.log('App', App);

                App.utils.ajax({
                    url: './js/data/products.json',
                    callbackSuccess: function(response) {
                        var products = JSON.parse(response);

                        self.productsCollection = App.Collections.Product({
                            model: App.Models.Product()
                        });

                        self.productsCollection.add(products);

                        self.beforeRender();
                    }
                });
            },
            render: function () {
                var self = this,
                    index = 0,
                    models = self.productsCollection.models,
                    productsLength = models.length,
                    productsHtml = '';

                for (index; index < productsLength; index++) {
                    var product = models[index];

                    productsHtml += self.parsedTpl(product);
                }

                document.getElementById('products-view-port').innerHTML = productsHtml;
            }
        });
    };

    router.product = function() {
        console.error('product');
    };

    router.handle = function (hash) {
        var self = this,
            route = self.routes[hash];

        if (route) {
            if (typeof self[route] === 'function') {
                self[route].call(self);
            }
        }
        else {
            throw Error('page doesn\'t exist');
        }
    };


    router.initialize = function() {
        var self = this;

        console.error('init router');

        window.addEventListener('hashchange', function (event) {
            console.error('hashchange');
            self.handle(window.location.hash);
        }, false);

        window.addEventListener('beforeunload', function (event) {
            console.error('beforeunload');
            //self.handle(window.location.hash);

            return 'riba';
        }, false);

        window.addEventListener('load', function (event) {
            console.error('load');
            self.handle(window.location.hash);
        }, false);
    };


    router.initialize();
});