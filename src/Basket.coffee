class Basket

  constructor: ->
    @items = []
    @distinctCount = 0
    @totalCount = 0

  add: (item) ->
    if @itemExistsInBasket(item)
      currentItem = @getItemFromBasket item
      currentItem.quantity++
    else
      @items.push
        item: item,
        quantity: 1

    @distinctCount = @items.length

    @totalCount++

  empty: ->
    @items = []
    @distinctCount = 0
    @totalCount = 0

  itemExistsInBasket: (item) ->
    for basketItem in @items
      return true if basketItem.item.id is item.id
    false
  getItemFromBasket: (item) ->
    for basketItem in @items
      return basketItem if basketItem.item.id is item.id
    false
  getQuantity: (item) ->
    if @itemExistsInBasket item
      @getItemFromBasket(item).quantity
    else
      0

  getItemIndex: (item) ->
    count = 0
    for basketItem in @items
      return count if basketItem.item.id is item.id
      count++
    -1
  remove: (item, quantity = 1) ->
    return unless @itemExistsInBasket item
    basketItem = @getItemFromBasket item
    basketItem.quantity -= quantity
    if basketItem.quantity <1
      itemLoc = @getItemIndex item
      @items.splice(itemLoc, 1)
    @distinctCount = @items.length
    @totalCount -= quantity

window.Basket = Basket