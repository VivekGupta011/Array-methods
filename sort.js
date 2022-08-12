let num=[4,5,6,7,3,6,47,7,];

// normal sorting
console.log(
    num.sort()
)

// using proper consition
console.log(
    num.sort((a,b)=>{
        if(a>b) return 1;
        else if(a<b) return -1;
        else return 0;
    })
)

// same thing we can also use shorthand property
console.log(
    num.sort((a,b)=>{
        return a-b;
    })
)


// when we have to perform sorting method on any string
const employee = [
    {
      name: "vivek",
      id: 1,
      salary: 500,
      lastName: "gupta1",
    },
    {
      name: "akash",
      id: 2,
      salary: 1000,
      lastName: "gupta2",
    },
    {
      name: "ravi",
      id: 3,
      salary: 1500,
      lastName: "gupta3",
    },
    {
      name: "sachin",
      id: 4,
      salary: 2000,
      lastName: "gupta4",
    },
  ];

// for ascending order type 1
  console.log(
    employee.sort((a,b)=>{
        if(a.name > b.name) return 1;
        else if(a.name < b.name) return -1;
        else return 0;
    })
  )

//   for descending order type2
  console.log(
    employee.sort((a,b)=>{
        if(a.salary < b.salary) return 1;
        else if(a.salary > b.salary) return -1;
        else return 0;
    })
  )

  // type 3

  console.log(
    employee.sort((a,b)=>{
      if(a.salary>b.salary){
        return 1;
      }else{
        return -1;
      }
    })
  );

  // type4
  console.log(employee.sort((a,b)=>{
    return b.salary-a.salary
  }))