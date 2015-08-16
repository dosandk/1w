function Products() {
	var forEach = Array.prototype.forEach,
		dataArray = [
			{ productName: 'молоко', 			productPrice: 12,  category: 'cheap', 	  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'йогурт', 			productPrice: 30,  category: 'expensive', productDiscountPercentage: 10, discountValue: null },
			{ productName: 'сок вишневый', 		productPrice: 20,  category: 'expensive', productDiscountPercentage: 10, discountValue: null },
			{ productName: 'сок апельсиновый', 	productPrice: 28,  category: 'cheap', 	  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'рогалик с маком', 	productPrice: 5,   category: 'cheap', 	  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'трубочка с кремом', productPrice: 8,   category: 'expensive', productDiscountPercentage: 10, discountValue: null },
			{ productName: 'шампанское', 		productPrice: 30,  category: 'cheap', 	  productDiscountPercentage: 10, discountValue: null },
			{ productName: 'вино', 				productPrice: 100, category: 'expensive', productDiscountPercentage: 10, discountValue: null }
		];

	this.fetch = function() {
		this.list = dataArray;
		calculateDiscount(this.list);

		return this;
	};

	function calculateDiscount(products) {
		var discount = {
				cheap: 30,
			expensive: 10
		};
		forEach.call(products, function(product) {
			if (product.category) {
				product.discountValue = product.productPrice * discount[product.category] / 100;
			}
			else {
				product.discountValue = product.productPrice * product.productDiscountPercentage / 100;
			}
		});
	}

	return this;
};