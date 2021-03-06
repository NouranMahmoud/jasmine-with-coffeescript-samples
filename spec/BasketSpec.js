// Generated by CoffeeScript 1.8.0
(function() {
  describe("Basket", function() {
    var basket, laptop, mouse;
    basket = laptop = mouse = void 0;
    beforeEach(function() {
      basket = new Basket();
      laptop = new Item(1, "laptop", 400);
      return mouse = new Item(2, "mouse", 10);
    });
    describe("Add a basket", function() {
      it("should keep track of distict items and quantities in the basket", function() {
        basket.add(laptop);
        expect(basket.totalCount).toEqual(1);
        expect(basket.distinctCount).toEqual(1);
        basket.add(laptop);
        expect(basket.totalCount).toEqual(2);
        expect(basket.distinctCount).toEqual(1);
        basket.add(mouse);
        expect(basket.totalCount).toEqual(3);
        return expect(basket.distinctCount).toEqual(2);
      });
      return it("Allow adding more than 1 item to the basket at once", function() {
        basket.add(laptop, 3);
        expect(basket.totalCount).toEqual(3);
        expect(basket.getQuantity(laptop)).toEqual(3);
        return expect(basket.distinctCount).toEqual(1);
      });
    });
    describe("Emtpy a basket", function() {
      it("empties the basket with items in", function() {
        basket.add(laptop);
        basket.empty();
        return expect(basket.items.length).toEqual(0);
      });
      return it("update the basket count variables", function() {
        basket.add(laptop);
        basket.empty();
        expect(basket.distinctCount).toEqual(0);
        return expect(basket.totalCount).toEqual(0);
      });
    });
    describe("Finding an item in a basket", function() {
      it("returns true if the item exist", function() {
        basket.add(laptop);
        return expect(basket.itemExistsInBasket(laptop)).toBeTruthy();
      });
      return it("returns false if the item not exist", function() {
        return expect(basket.itemExistsInBasket(laptop)).toBeFalsy();
      });
    });
    describe("Fetching items from basket", function() {
      it("returns the item object if it exists", function() {
        var result;
        basket.add(laptop);
        result = basket.getItemFromBasket(laptop);
        expect(result.item).toEqual(laptop);
        return expect(result.quantity).toEqual(1);
      });
      return it("returns false if the item is not in basket", function() {
        return expect(basket.getItemFromBasket(laptop)).toBeFalsy();
      });
    });
    describe("getting the quantity of item in basket", function() {
      it("returns the correct quantity", function() {
        basket.add(laptop);
        basket.add(laptop);
        return expect(basket.getQuantity(laptop)).toEqual(2);
      });
      return it("returns 0 if there's no items", function() {
        return expect(basket.getQuantity(laptop)).toEqual(0);
      });
    });
    describe("getting index of item", function() {
      it("returns the index", function() {
        basket.add(laptop);
        return expect(basket.getItemIndex(laptop)).toEqual(0);
      });
      return it("returns -1 index if item not found", function() {
        return expect(basket.getItemIndex(laptop)).toEqual(-1);
      });
    });
    return describe("removing from a basket", function() {
      it("should deduct the quantity passed in", function() {
        basket.add(laptop);
        basket.add(laptop);
        basket.remove(laptop, 1);
        expect(basket.getQuantity(laptop)).toEqual(1);
        expect(basket.distinctCount).toEqual(1);
        return expect(basket.totalCount).toEqual(1);
      });
      it("should remove item completely if removing the total quantity", function() {
        basket.add(laptop);
        basket.add(laptop);
        basket.remove(laptop, 2);
        expect(basket.getQuantity(laptop)).toEqual(0);
        return expect(basket.itemExistsInBasket(laptop)).toBeFalsy();
      });
      it("should deal with multiple items correctly", function() {
        basket.add(laptop);
        basket.add(laptop);
        basket.add(mouse);
        basket.remove(mouse);
        expect(basket.itemExistsInBasket(mouse)).toBeFalsy();
        return expect(basket.getQuantity(laptop)).toEqual(2);
      });
      return it("should not break totalCount with invalid quantities", function() {
        basket.add(laptop);
        basket.add(laptop);
        basket.add(mouse);
        basket.remove(laptop, 3);
        return expect(basket.totalCount).toEqual(1);
      });
    });
  });

}).call(this);
