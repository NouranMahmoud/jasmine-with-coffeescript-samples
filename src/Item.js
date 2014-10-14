// Generated by CoffeeScript 1.8.0
(function() {
  var Item;

  Item = (function() {
    function Item(id, title, price) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.protectedFields = ["id"];
    }

    Item.prototype.update = function(opts) {
      var key, value, _results;
      _results = [];
      for (key in opts) {
        value = opts[key];
        if ((this[key] != null) && !this.fieldIsProtected(key)) {
          _results.push(this[key] = value);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Item.prototype.addProtectedField = function(field) {
      var found;
      found = this.fieldIsProtected(field);
      if (found === false) {
        return this.protectedFields.push(field);
      }
    };

    Item.prototype.fieldIsProtected = function(field) {
      var pField, _i, _len, _ref;
      _ref = this.protectedFields;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        pField = _ref[_i];
        if (pField === field) {
          return true;
        }
      }
      return false;
    };

    return Item;

  })();

  window.Item = Item;

}).call(this);
