describe "Item", ->

  item = undefined
  beforeEach ->
    item = new Item 1, "Mouse", 10

  describe "updating an item", ->
    it "updates properties passed in", ->
      item.update {
        title: "Super Mouse",
        price: 15
      }
      expect(item.title).toEqual "Super Mouse"
      expect(item.price).toEqual 15
      expect(item.id).toEqual 1
  describe "Protected fields", ->
    it "Should has the ID as protected field", ->
      expect(item.protectedFields).toContain "id"
      expect(item.protectedFields.length).toEqual 1
    it "Should let us add a protected field", ->
      item.addProtectedField "title"
      expect(item.protectedFields).toContain "title"
    it "should not allow an protected field to be updated", ->
      item.addProtectedField "title"
      item.update {
        title: "m",
        price: 12
      }
      expect(item.id).toEqual 1
      expect(item.title).toEqual "Mouse"
      expect(item.price).toEqual 12