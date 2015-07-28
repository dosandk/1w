(function() {

    window.onload = function() {
      	var products = new Products(),
      		table;

		products.fetch();
		table = new Table(products.list, 'productTableContainer');
    };

})();
