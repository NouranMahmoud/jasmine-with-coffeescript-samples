describe "Basket", ->
  it "should keep track of items in the basket", ->
    basket = new Basket()
    item = new Item()
    basket.add item
    expect(basket.ItemCount).toEqual 1
    basket.add item
    expect(basket.ItemCount).toEqual 2