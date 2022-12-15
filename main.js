const parent = {
    fullname : 'Abhi-Mishra',
    mobile : 12345,
    dep : 'mba'


}

const child= {
    __proto__:parent
}
console.log(child.fullname);

arr1 = [1,3,2,5,]
arr2 = [6,4,2,7]
arr3 = [1,4,3,0]

const arrsum = {
    addAll : function (arr) {
  let sum = 0;
  for(let i=0; i<=arr.length; i++ ){
    sum = sum+aa[i];
  }
  console.log(sum);
}
}
Array.__proto__= arrsum;
Array.addAll(arr1);
Array.addAll(arr2);
Array.addAll(arr3);

var obj1 = {
    name:'Abhi',
    dep : 'cse'
       
}
 console.log(obj1.name);
 
