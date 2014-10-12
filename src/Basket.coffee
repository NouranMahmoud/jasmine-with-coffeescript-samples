class Basket
  items: []
  distinctCount: 0
  totalCount: 0

  add: (item) ->
    #if item is in basket
    #  increase quantity
    #else
    #    add new item, with quantity of 1
    itemInBasket = false
    for basketItem in @items
      itemInBasket = true if basketItem.item.id is item.id

    if itemInBasket
      currentItem = undefined
      for basketItem in @items
        currentItem = basketItem if basketItem.item.id is item.id
      currentItem.quantity++
    else
      @items.push
        item: item,
        quantity: 1


    @distinctCount = @items.length
    @totalCount++


window.Basket = Basket