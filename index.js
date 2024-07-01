// Write your solution in this file!

const employee = {
    name: 'Sam'
  };
  
  // Non-destructively update employee with key and value
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object with existing properties
    return { ...employee, [key]: value };
  }
  
  // Destructively update employee with key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly update the original object
    employee[key] = value;
    return employee;
  }
  
  // Non-destructively delete a key from employee
  function deleteFromEmployeeByKey(employee, key) {
    // Use the spread operator to create a new object without the specified key
    const { [key]: _, ...newEmployee } = employee;
    return newEmployee;
  }
  
  // Destructively delete a key from employee
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key directly from the original object
    delete employee[key];
    return employee;
  }
  