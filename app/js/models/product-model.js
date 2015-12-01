App.defineScope('Models.Product', function() {
    if (!(this instanceof App.Models.Product)) {
        return new App.Models.Product();
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
});