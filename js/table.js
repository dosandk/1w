(function() {

    function Table(data) {
        this.products = data.products;
        this.container = document.getElementsByClassName('container')[0];
    }

    Table.prototype.render = function() {
        this.formTable();
    };

    Table.prototype.formTable = function() {
        var cls = document.createAttribute('class');

        this.table = document.createElement('table');
        cls.value = 'table table-hover';
        this.table.setAttributeNode(cls);
        this.table.appendChild(this.formThead());
        this.table.appendChild(this.formTbody());
        this.container.appendChild(this.table);
    };

    Table.prototype.formThead = function(){
        var colTitles = ['Product', 'Price, грн.', 'Discount, %', 'Discount, грн.'],
            thead = document.createElement('thead'),
            tr = document.createElement('tr'),
            th,
            textNode;

        for (var i = 0; i < colTitles.length; i++) {
            th = document.createElement('th');
            textNode = document.createTextNode(colTitles[i]);

            th.appendChild(textNode);
            tr.appendChild(th);
        }
        thead.appendChild(tr);

        return thead;
    };

    Table.prototype.formTbody = function() {
        var tbody = document.createElement('tbody');

        for (var i = 0; i < this.products.length; i++) {
            tbody.appendChild(new Row(this.products[i]).render());
        }
        return tbody;
    };

    window.Table = Table;

})();

