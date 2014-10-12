describe "Basket", ->

  basket = laptop = mouse = undefined
  beforeEach ->
    basket = new Basket()
    laptop = new Item(1, "laptop", 400)
    mouse = new Item(2, "mouse", 10)

  describe "Add a basket", ->
    it "should keep track of distict items and quantities in the basket", ->
      basket.add laptop
      expect(basket.totalCount).toEqual 1
      expect(basket.distinctCount).toEqual 1

      basket.add laptop
      expect(basket.totalCount).toEqual 2
      expect(basket.distinctCount).toEqual 1

      basket.add mouse
      expect(basket.totalCount).toEqual 3
      expect(basket.distinctCount).toEqual 2

  describe "Emtpy a basket", ->
    it "empties the basket with items in", ->
      basket.add laptop
      basket.empty()
      expect(basket.items.length).toEqual 0

    it "update the basket count variables", ->
      basket.add laptop
      basket.empty()
      expect(basket.distinctCount).toEqual 0
      expect(basket.totalCount).toEqual 0

  describe "Finding an item in a basket", ->
    it "returns true if the item exist", ->
      basket.add laptop
      console.log basket.items
      expect(basket.itemExistsInBasket(laptop)).toBeTruthy()

    it "returns false if the item not exist", ->
      expect(basket.itemExistsInBasket(laptop)).toBeFalsy()
  describe "Fetching items from basket", ->
    it "returns the item object if it exists", ->
      basket.add laptop
      result = basket.getItemFromBasket laptop
      expect(result.item).toEqual laptop
      expect(result.quantity).toEqual 1
    it "returns false if the item is not in basket", ->
      expect(basket.getItemFromBasket(laptop)).toBeFalsy()


