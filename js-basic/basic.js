//1-for loop strart 1 until 135
//print the number 
/*for (let i=0; i<=135 ; i++){
    console.log(i)

}*/
//2- print odd number 1-135
//write a program using javescript the print all the odd number from 1 to 135
//if condition to deternin if the number is odd or not 
//if true print the result
/*for(let i=1 ; i<=135 ; i++ ){
    if(i%2!==0){
        console.log(i)
    }

}*/
//3-define a variable to hold the sum of the printed number 
//for loop start from 1 end at 135
//print the number and the sum

/*
let sum = 0;

for (let i = 1; i <= 135; i++) {
    sum = sum + i;
    console.log(`The number is ${i} and the sum is ${sum}`);
}
*/
//4-print the elements of an array
//given an array X=[1,4,2,12],write a program that will  iterate through the array and print all numbers
//on the screen . your program should work with arrays of all sizes 


//define an array of numbers 
//for loop to iterate the array
// //print the element 
// let x = [1,4,2,12]
// for(let i=0; i<x.length; i++){
//     console.log(x[i])
// }
// for(let i of x){
//     console.log(i)
// }
//5-define a varible to hold the max value
//for loop to loop throug the array elements 
//if condition to check if the varible value less than the curent array element 
//print max
// let x=[2,-3,-1]
// let max=0
// for(let i=0;i<x.length;i++){
//     if(max<x[i]){
//         max=x[i]
//     }
// }
// console.log(max)

//6-define two variables numbers 
//for loop to iterate the array elements
//find sum of the elemnts
//find the avarge and print it 

// let sum = 0
// let av=0
// let x =[2,1,3]
// for(let i=0; i<x.length  ; i++){
//     sum=sum+x[i]

// }
// av=sum/x.length
// console.log(av)



//7-for loop 
//if condition is negative write number 
//print array
// let x= [2,0,4,0]
// for(let i=0; i<x.length ; i++){
//     if(x[i]<0)
//         x.splice(i,1,0)
// }
// console.log(x)

//8-number to string
//write a program that takes an array of numbers and turns the negative values into strings.

//for loop to iterate through the array elements 
//print turing

let x=[2,-1,4,-3,-2]
for(let i=0; i<=x.length; i++){
    if(x[i]<0){
        x.splice(i,1,'turing')
    }
}
console.log(x)