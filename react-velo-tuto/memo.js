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










function myFunction(v, w, x, y, z) {
  console.log(v,w,x,y,z);
}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);


var arr = [1,2,3];
console.log(arr);
var arr2 = [...arr]; // like arr.slice()
console.log(arr2);
arr2.push(4); // arr2 becomes [1,2,3,4], arr stays unaffected
console.log(arr);
console.log(arr2);
