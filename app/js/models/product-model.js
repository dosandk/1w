var modelProduct = App.defineScope('Models');

modelProduct.Product = function() {
    if (!(this instanceof modelProduct.Product)) {
        return new modelProduct.Product();
    }

    var model = this;

    var discountValues = {
        cheap: 30,
        expensive: 10
    };

    model.getDiscount = function(data) {
        var productData = data;

        productData.discountValue = (data.price * discountValues[data.discount]) / 100;

        return productData
    };
};