let number1 = [1, 2, 3, 4, , 6, 56, 5, 6, 7, 8];


console.log(
  number1.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr;
  }, 0)
);


// second example
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



  console.log(
    employee.reduce((acc,curr)=>{
        console.log("this is salary sum ",acc,curr);
        return acc+curr.salary;
    },0)
  )