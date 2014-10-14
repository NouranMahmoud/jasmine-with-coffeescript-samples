class Item
  constructor: (@id, @title, @price) ->
    @protectedFields = ["id"]

  update: (opts) ->
    for key, value of opts
      if @[key]? and not @fieldIsProtected key
        @[key] = value

  addProtectedField: (field) ->
    found = @fieldIsProtected field

    if found == false
      @protectedFields.push field

  fieldIsProtected: (field) ->
    for pField in @protectedFields
      return true if pField == field
    false

window.Item = Item