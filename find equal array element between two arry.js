const number1=[5,4,7,8,95,43,2,4,67];
const number2=[5,3,5,64,23,343,24,5,6,7,67];
console.log(
    number1.filter((item)=>{
        return number2.includes(item);
    })
);