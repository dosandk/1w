var modelProduct = App.defineScope('Models');

modelProduct.Product = function() {
    if (!(this instanceof modelProduct.Product)) {
        return new modelProduct.Product();
    }

    var model = this;

    model.getDiscount = function(data) {
        var productData = data;

        productData.discountValue = (data.price * data.discount) / 100;

        return productData
    };
};