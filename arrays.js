/*var ages=[1,2,3,4,5,6,65]
ages.forEach(function(age, ind){
    console.log(ind,age )
})*/

//let ages=[2,3,6,9,1]

/*function multiplyBy2(x,y){
    console.log(x*2,y)
}
ages.forEach(multiplyBy2)*/

/*const numbers=ages.map(function(name,ind){
    return`hej ${name}  ${ind}`
})*/

/*const arr1=[2,4,6,8,10,12,14,16]
const arr2=[1,3,5,7,9,11,13,15]
let  arrCount=0
let arrCount2=0
arr1.forEach((num1)=>
    arrCount+=num1
)
arr2.forEach(function(num2){
    arrCount2+=num2
})
 const arrTot=`${arrCount+arrCount2}`
console.log(`Arr1 total is ${arrCount}, arr2 total is ${arrCount2} and both togeter are ${arrTot}`)

 



const arr3=[10,20,30,40,50,60]
const numbers=arr3.map(function(number){
    return (number*3)
})
console.log(numbers)

const arr4=[100,43,56,78,12,43,56]
const filter=arr4.filter(function(num){
    return num>63 
}) 
// console.log(filter)*/

 /*for(i=1;i<11;i++){
     if(i==5){
         continue
     }
     console.log(i)
 }*/
 /*const arr=[
     [
        { ale:"persona", eta:28}
     ],
     [
         {zeus:"cane", eta:15},
         {milo: "cane", eta:15}
     ],
     [
         {papa:"persona",eta:61},
         {mamma:"persona",eta:61},
         {dany:"persona",eta:61}
     ]
 ]
 const age=(a=>{
    return  a.eta
})
      for(i=0;i<arr.length;i++){
      console.log(`det finns ${arr[i].length} personer som är ${age(arr[i] [0])} år gammal`)
    }
   
    

    

/*for(i=0;i<arr.length;i++){
    console.log( arr[i].length)
}*/
const arr=[1,2,5,7]

for(i=0;i<arr.length;i++){
    if(arr[i]!=5){
        console.log("hej")
        continue
    }
    console.log(arr[i])
}