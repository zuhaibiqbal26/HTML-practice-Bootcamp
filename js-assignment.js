function sum(a,b){
return (a+b)
}

function sum(arr){

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total+=arr[i] 
    }
    return total;
}

function isEven(num){
    if(num%2==0){
        return ("The number "+ num +" is Even")
    }
    return ("The number "+ num +" is not Even")
}

function isOdd(num){
    if(num%2==0){
        return ("The number "+ num +" is not Odd")
    }
    return ("The number "+ num +" is Odd")
}

function union(a,b){
    // let c =a.concat(b).sort(function(a,b){return a-b})

   
    return (c)
}

function intersection(a,b){
    let c = [];
    let k = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i]==b[j]){
                c[k]= (a[i])
                k++
            }
        }
        
    }
    return c
}


let a = 6;
let b = 9;
var arr = [4,2,3,4,5]

c= sum(a,b)
let total = sum(arr)

// console.log(sum([1,2,3,4,5]))
var arr1 = [2,3, 5, 6]
var arr2 = [1,5,6]
console.log(isOdd(9))
console.log(intersection(arr1,arr2))




