jest.dontMock('../src/model/cart');
jest.dontMock('../src/model/cart_item');
jest.dontMock('../src/model/promotion');
jest.dontMock('../src/model/promotion_item');
jest.dontMock('lodash');
describe('Cart()', function() {
	describe('#addCartItem', function() {
		it('should return the correct string', function() {

				var Cart = require('../src/model/cart');
				var cartItems = [];
				var NextCartItem = {
					item : {
						barcode : 'ITEM000001' ,
						name : '雪碧',
				        unit : '瓶',
				        price : 3.00
					},
					count : 1
				};
				var cart = new Cart();
			    cart.addCartItem(NextCartItem);
				expect(cart.cartItems).toEqual([NextCartItem]);
		});

		it('should return the correct number', function() {

				var Cart = require('../src/model/cart');
				
				var NextCartItem = {
					item : {
						barcode : 'ITEM000001' ,
						name : '雪碧',
				        unit : '瓶',
				        price : 3.00
					},
					count : 1
				};
				var cart = new Cart();
			    cart.cartItems = [NextCartItem];
				
			    cart.addCartItem(NextCartItem);
				expect(NextCartItem.count).toBe(2);
		});

  });

	describe('#getCartItemsText', function() {
		it ('should return correct string', function() {
			var Cart = require('../src/model/cart');
			var CartItem = require('../src/model/cart_item');
		
			var cart = new Cart();
			var cartItem = new CartItem({
				 	barcode:'ITEM000001',
			        name : '雪碧',
			        unit : '瓶',
			        price : 3.00
			},1);
			cart.cartItems = [cartItem];
			
			var cartItemsText = cart.getCartItemsText();

			expect(cartItemsText).toEqual('名称：雪碧，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n');
		});
	});

	describe('#getPromotionTotalPrice',function() {
		it ('should return correct string',function() {
			var Cart = require('../src/model/cart');
			var CartItem = require('../src/model/cart_item');

			var cart = new Cart();
			var cartItem = new CartItem({
		         barcode:'ITEM000001',
		         name : '雪碧',
		         unit : '瓶',
		         price : 3.00
		       },
		       5);

			cart.cartItems = [cartItem];
			var promotionTotalPrice = cart.getPromotionTotalPrice();
			expect(promotionTotalPrice).toBe(3);
		});
	});

	describe('#getTotalPrices',function() {
		it ('should return correct string',function() {
			var Cart = require('../src/model/cart');
			var CartItem = require('../src/model/cart_item');

			var cart = new Cart();
			var cartItem = new CartItem({
		         barcode:'ITEM000001',
		         name : '雪碧',
		         unit : '瓶',
		         price : 3.00
		       },
		       5);

			cart.cartItems = [cartItem];
			var totalPrices = cart.getTotalPrices();
			expect(totalPrices).toBe(15);
		});
	});

	describe('#getPayThePrice',function() {
			it ('should return correct string',function() {
				var Cart = require('../src/model/cart');
				var CartItem = require('../src/model/cart_item');

				var cart = new Cart();
				var cartItem = new CartItem({
			         barcode:'ITEM000001',
			         name : '雪碧',
			         unit : '瓶',
			         price : 3.00
			       },
			       5);

				cart.cartItems = [cartItem];
				var payThePrice = cart.getPayThePrice();
				expect(payThePrice).toBe(12);
			});		
		});

	
	describe('#getPromotionsText',function() {
			it ('should return correct string',function() {
				var Cart = require('../src/model/cart');
				var CartItem = require('../src/model/cart_item');

				var cart = new Cart();
				var cartItem = new CartItem({
			         barcode:'ITEM000001',
			         name : '雪碧',
			         unit : '瓶',
			         price : 3.00
			       },
			       5);

				cart.cartItems = [cartItem];
				var promotionsText = cart.getPromotionsText();
				expect(promotionsText).toBe('名称：雪碧，数量：1瓶\n');
			});		
		});
	/*describe('#getPromotionItems', function() {
		it ('should return correct string', function() {
			var Cart = require('../src/model/cart');
			var CartItem = require('../src/model/cart_item');
			var Promotion = require('../src/model/promotion');
			var PromotionItem = require('../src/model/promotion_item');

			var cart = new Cart();
			var cartItem = new CartItem({
				 	barcode:'ITEM000001',
			        name : '雪碧',
			        unit : '瓶',
			        price : 3.00
			},1);

			cart.cartItems = [cartItem];
			var promotionItems = cart.getPromotionItems();
			expect(promotionItems).toBe('雪碧，瓶，1,3');
		});
	});*/
});		