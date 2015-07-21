(function() {

    function Row(data) {
        this.product = data;
        this.product.discount = this.product.price * this.product.discount_percentage / 100;
    }

    Row.prototype.render = function() {
        return this.formTr();
    };

    Row.prototype.formTr = function() {
        var tr = document.createElement('tr');

        for (var property in this.product) {
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

