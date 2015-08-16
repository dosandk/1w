var discountModel = function(data) {
	this.priceWithDiscount = data;
	this.defaultProp = ['product', 'price, грн', 'Category', 'discount, %', 'discount, грн'];

	return this;
};

discountModel.calculateDiscount = function() {
	var productList,
		model,
		category,
		withDiscount;

	productCategory = {
		cheap: 30,
		expensive: 10
	};

	productList = {
		'молоко': {
			price: 12,
			category: 'cheap'
		},
		'йогурт': {
			price: 30,
			category: 'expensive'
		},
		'сок вишневый': {
			price: 20,
			category: 'expensive'
		},
		'сок апельсиновый': {
			price: 28,
			category: 'cheap'
		},
		'рогалик с маком': {
			price: 5,
			category: 'cheap'
		},
		'трубочка с кремом': {
			price: 8,
			category: 'expensive'
		},
		'шампанское': {
			price: 30,
			category: 'cheap'
		},
		'вино': {
			price: 100,
			category: 'expensive'
		},
	};

	for (var key in productList) {
		withDiscount = productList[key]['price'] * (100 - productCategory[productList[key]['category']]) / 100;
		productList[key]["discount"] = productCategory[productList[key]['category']];
		productList[key]["updatedPrice"] = withDiscount;
	}

	model = new discountModel(productList);

	return model;
};