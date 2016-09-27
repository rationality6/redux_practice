var cookie = {
  sugar: 10,
  flour: 5,
  calories: function() {
    console.log(this);
    var sugar = 4
    var details = function() {
      console.log(this.sugar);
      // console.log(this);
      console.log("Sugar amount is: " + this.sugar);
    }
    details()
  }
}

cookie.calories();
