(function() {

    window.Data = {
        products: [
            {name: 'молоко',             price: 12,  categoryId: 1 },
            {name: 'йогурт',             price: 30,  categoryId: 2 },
            {name: 'сок вишневый',       price: 20,  categoryId: 2 },
            {name: 'сок апельсиновый',   price: 28,  categoryId: 1 },
            {name: 'рогалик с маком',    price: 5,   categoryId: 1 },
            {name: 'трубочка с кремом',  price: 8,   categoryId: 2 },
            {name: 'шампанское',         price: 30,  categoryId: 1 },
            {name: 'вино',               price: 100, categoryId: 2 }
        ],
        categories: {
            1: {name: 'cheap', discount_percentage: 30},
            2: {name: 'expancive', discount_percentage: 10 }
        }
    };

})();
