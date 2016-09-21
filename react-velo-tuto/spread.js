var iter = [1,2,3]
var iter2 = [...iter,4,5,6]
console.log(iter2);
console.log(iter);



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
