App.defineScope('Collections.Product', function(data) {
    if (!(this instanceof App.Collections.Product)) {
        return new App.Collections.Product(data);
    }

    var collection = this;

    collection.models = [];

    collection.model = data.model || {};

    collection.add = function(data) {
        var index = 0,
            productsLength = data.length;

        for (index; index < productsLength; index++) {
            var productModel = collection.model.getDiscount(data[index]);

            collection.models.push(productModel);
        }

        return collection;
    };
});