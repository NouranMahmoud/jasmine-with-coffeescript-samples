// Generated by CoffeeScript 1.8.0
(function() {
  describe("Basket", function() {
    return it("should keep track of items in the basket", function() {
      var basket, item;
      basket = new Basket();
      item = new Item();
      basket.add(item);
      expect(basket.ItemCount).toEqual(1);
      basket.add(item);
      return expect(basket.ItemCount).toEqual(2);
    });
  });

}).call(this);
