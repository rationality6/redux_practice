var sugar = 11
var cookie = {
  sugar: 12,
  calories: function(){
    // var details = function(){
    //   console.log(this.sugar);
    // }
    // details()
    return this.sugar
  }
}

console.log(cookie.calories());


sugar = 3
var cookie = {
  sugar: 12,
  calories: function(){
    function details(){
      console.log(this.sugar);
    }
    details()
    return this.sugar
  }
}

console.log( cookie.calories());




calories= function(){
  sugar = 12
  details = function(){
    console.log(this.sugar);
  }
  details()
  return this.sugar
}

calories()


gree = 'd'
function foo(){
  var gree = 'hello'
  function bar(){
    console.log(this.gree);
  }
  bar()
}

foo();



var myFunction = function () {
  var name = 'Todd';
  var myOtherFunction = function () {
    console.log('My name is ' + name);
  };
  console.log(name);
  myOtherFunction(); // myOtherFunction 호출
};
myFunction();

myFunction
