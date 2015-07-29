var discountView = function(model) {
	this.model = model;

	return this;
};

discountView.prototype.initiazile = function() {
	this.buildThead();
	this.buildTable();
};

discountView.prototype.buildThead = function() {
	var defaultTheadProp = this.model.defaultProp,
		theadDom = document.getElementById('column_value'),
		theadElement;

	for(var i = 0; i < defaultTheadProp.length; i++) {
		theadElement = document.createElement('td');
		theadDom.appendChild(theadElement).innerHTML = defaultTheadProp[i];
	}
};

discountView.prototype.buildTable = function() {
	var modelWithDiscountPrice = this.model.priceWithDiscount,
		createTrElement,
		createTdElement,
		tableDom,
		index = 0;

	for(key in modelWithDiscountPrice) {
		createTrElement = document.createElement('tr');
		createTdElement = document.createElement('td');
		tableDom = document.getElementsByTagName('tbody')[0];

		tableDom.appendChild(createTrElement).appendChild(createTdElement).innerHTML = key;

		for(keyObject in modelWithDiscountPrice[key]) {
			tableDom = document.getElementsByTagName('tbody')[0];
			createTdElement = document.createElement('td');

			tableDom.getElementsByTagName('tr')[index].appendChild(createTdElement).innerHTML = modelWithDiscountPrice[key][keyObject];
		}

		index++;
	}
};