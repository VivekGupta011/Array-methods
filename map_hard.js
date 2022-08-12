let sum=[5,4,1,2,3,6,7,8,4,7,9,6];

function multiple(x){
    return x<6;
}
;
console.log(sum.map(multiple));


// filter using filter method
function multiple_filter(y){
    return y<6;
}
console.log(sum.filter(multiple_filter))

console.log(
    sum.filter((item)=>{
        if(item===4){
            console.log("this is fil",item)
        }else if(item===7){
            console.log(item)
        }
    })
);


console.log(
    sum.map((item)=>{
        if(item===4){
            console.log("this is map",item)
        
        }

    })
)

// // odd number fro array
function odd(x){
    return x%2;
}
function even(x){
    return x%2===0;
}
console.log(sum.filter(odd))
console.log(sum.filter(even))
