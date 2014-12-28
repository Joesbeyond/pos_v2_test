jest.dontMock('../src/model/cart_item');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/promotion');
jest.dontMock('lodash');
describe('CartItem(', function() {
  describe('#getPromotionCount', function() {
    it('should return correct string', function() {
      var CartItem = require('../src/model/cart_item');
      var Item = require('../src/model/item');
      item = {
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00
      };
      var cartItem = new CartItem(item, 5);

      cartItem.getPromotionType = jest.genMockFn();

      cartItem.getPromotionType.mockReturnValue('BUY_TWO_GET_ONE_FREE');

      var result = cartItem.getPromotionCount();

      expect(result).toBe(1);
    });
  });

 describe('#toInventoryText', function() {
    it('should return correct string', function() {
      var CartItem = require('../src/model/cart_item');

      item = {
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00
      };
      var cartItem = new CartItem(item, 5);

      cartItem.getSubtotal = jest.genMockFn();

      cartItem.getSubtotal.mockReturnValue(12.00);


      var expectOutput = '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n';
      result = cartItem.toInventoryText();
      expect(result).toEqual(expectOutput);
    });
  });

 describe('#getSubtotal()',function() {
  it('should return correct string',function() {
    var CartItem = require('../src/model/cart_item');

    var item = {
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00 

      }; 
      var cartItem = new CartItem(item, 5);
      cartItem.getPromotionCount = jest.genMockFn();
      cartItem.getPromotionCount.mockReturnValue(1);
      var result = cartItem.getSubtotal();
      expect(result).toEqual(12);
    });
  });

  describe('#getPromotionType()', function() {
    it('should return correct string', function() {
      var CartItem = require('../src/model/cart_item');
       var item = {
        barcode:'ITEM000001'
    
       };
     
      var cartItem = new  CartItem(item, 5);
      var type = cartItem.getPromotionType();

      expect(type).toBe('BUY_TWO_GET_ONE_FREE');
    });
 });

});
