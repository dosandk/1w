var discountController = function() {
	return this;
};

discountController.prototype.loadView = function() {
	var model,
		view;

	model = discountModel.calculateDiscount();
	view = new discountView(model);
	view.initiazile();
};