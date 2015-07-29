var discountModel = function(data) {
	this.priceWithDiscount = data;
	this.defaultProp = ['product', 'price, грн', 'discount, %', 'discount, грн'];

	return this;
};

discountModel.calculateDiscount = function() {
	var productList,
		model,
		discountValue = 10, //discount
		withDiscount;

	productList = {
		'молоко': {
			price: 12
		},
		'йогурт': {
			price: 30
		},
		'сок вишневый': {
			price: 20
		},
		'сок апельсиновый': {
			price: 28
		},
		'рогалик с маком': {
			price: 5
		},
		'трубочка с кремом': {
			price: 8
		},
		'шампанское': {
			price: 30
		},
		'вино': {
			price: 100
		},
	};

	for (var key in productList) {
		withDiscount = productList[key]['price'] * (100 - discountValue) / 100;
		productList[key]["discount"] = discountValue;
		productList[key]["updatedPrice"] = withDiscount;
	}

	model = new discountModel(productList);

	return model;
};