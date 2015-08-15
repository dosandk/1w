(function() {

    function Row(data) {
        this.displayProperties = ['name', 'price', 'category', 'discount_percentage', 'discount'];
        this.product = data;
        var category = Data.categories[this.product.categoryId];
        this.product.category = category.name;
        this.product.discount_percentage = category.discount_percentage;
        this.product.discount = this.product.price * this.product.discount_percentage / 100;
    }

    Row.prototype.render = function() {
        return this.formTr();
    };

    Row.prototype.formTr = function() {
        var tr = document.createElement('tr');

        for (var i = 0; i < this.displayProperties.length; i++ ) {
            var property = this.displayProperties[i];
            tr.appendChild(this.formTd(this.product[property]));
        }
        return tr;
    };

    Row.prototype.formTd = function(text) {
        var td = document.createElement('td'),
            textNode = document.createTextNode(text);

        td.appendChild(textNode);

        return td;
    };

    window.Row = Row;

})();

