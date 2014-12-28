jest.dontMock('../src/model/scanner');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/cart_item');
jest.dontMock('lodash');
describe('#Scanner()', function() {
	describe('#scan', function() {
		it('should return correct bacodeTestType 1',function() {
			var Scanner = require('../src/model/scanner');
			//var CartItem =  require('../src/model/cart_item');//if u use it in the back 
			var scanner =  new Scanner();
			/*var cartItem = { item : {
				barcode:'}',
		        name : '雪碧',
		        unit : '瓶',
		        price : 3.00},
		        count : 1
			}*/
			var bacodeTestType1 = 'ITEM000001';
			var result = scanner.scan(bacodeTestType1); 
			expect(result.count).toBe(1);
			expect(result.item.barcode).toBe('ITEM000001');
		
		});
	});
	describe('#scan', function() {
		it('should return correct bacodeTestType2',function() {
			var Scanner = require('../src/model/scanner');
			var CartItem =  require('../src/model/cart_item');
			var scanner =  new Scanner();
			var bacodeTestType2 = 'ITEM000004-5';
			var result = scanner.scan(bacodeTestType2); 
			expect(result.count).toBe(5);
			expect(result.item.barcode).toBe('ITEM000004');

		});
	});
});