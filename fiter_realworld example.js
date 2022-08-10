const numbers = [4, 5, 8, 6, 2, 6];
// filter

console.log(
  numbers.filter((item) => {
    return item % 2 == 0;
  })
);

// shorthand function

console.log(numbers.filter((item) => item % 2 == 0));

// performing action on object table

const employee = [
  {
    name: "vivek1",
    id: 1,
    salary: 500,
    lastName: "gupta1",
  },
  {
    name: "vivek2",
    id: 2,
    salary: 1000,
    lastName: "gupta2",
  },
  {
    name: "vivek3",
    id: 3,
    salary: 1500,
    lastName: "gupta3",
  },
  {
    name: "vivek4",
    id: 4,
    salary: 2000,
    lastName: "gupta4",
  },
];


// we performing various action on array using filter method 

console.log(
  employee.filter((item) => {
    return item.name == "vivek1";
  })
);


console.log(
    employee.filter((item)=>{
        return item.id <4;
    })
)


console.log(
    employee.filter((item)=>{
        return item.id <5 && item.lastName=="gupta4";
    })
)

console.log(
    employee.filter(item => item.salary>1000 || item.id==2)
    
)