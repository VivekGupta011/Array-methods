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

  let data=[];
  for(let i=0;i<employee.length;i++){
    console.log(employee[i].id,employee[i].salary)
    if(employee[i].salary>1000){
         data.push(employee[i].salary);
        console.log(employee[i].salary)
    }
  }

  console.log(`this value greater than 1000 ${data[1]}`);