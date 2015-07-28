function Products() {
	var forEach = Array.prototype.forEach,
		dataArray = [
			{ productName: 'молоко', 			productPrice: 12,  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'йогурт', 			productPrice: 30,  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'сок вишневый', 		productPrice: 20,  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'сок апельсиновый', 	productPrice: 28,  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'рогалик с маком', 	productPrice: 5,   productDiscountPercentage: 10, discountValue: null },
			{ productName: 'трубочка с кремом', productPrice: 8,   productDiscountPercentage: 10, discountValue: null },
			{ productName: 'шампанское', 		productPrice: 30,  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'вино', 				productPrice: 100, productDiscountPercentage: 10, discountValue: null }
		];

	this.fetch = function() {
		this.list = dataArray;
		calculateDiscount(this.list);

		return this;
	};

	function calculateDiscount(products) {
		forEach.call(products, function(product) {
			product.discountValue = product.productPrice * product.productDiscountPercentage / 100;
		});
	}

	return this;
};