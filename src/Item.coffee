class Item
  constructor: (@id, @title, @price) ->

  update: (opts) ->
    for key, value of opts
      if @[key]?
        @[key] = value

window.Item = Item