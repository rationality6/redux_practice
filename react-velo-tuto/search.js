var array = [2,7,9,10,1]
var a = array.sort(function(a,b){
    return a-b
})

// console.log(a);

var b = array.filter(function(a){
    return a > 5
})

console.log(b);

array = ['hyun','john']
var a = array.filter(function(x){
  return x.indexOf('k') > -1
})
console.log(a);
