class Basket
  items: []
  ItemCount: 0
  add: (item) ->
    @items.push item
    @ItemCount++


window.Basket = Basket