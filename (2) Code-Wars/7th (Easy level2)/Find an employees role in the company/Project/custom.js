function findEmployeesRole(name) {

  let employees = [ 
    {firstName: "Dipper", lastName: "Pines", role: "Boss"}, 
    {firstName: "Morty", lastName: "Smith", role: "Truck Driver"},
  ]


  for (let employee of employees) {
    if (employee.firstName + " " + employee.lastName === name) {
      return employee.role;
    }
  }

  return "Does not work here!";

}


console.log(findEmployeesRole("Dipper Pines"));