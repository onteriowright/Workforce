let employeeCustomerCollection = [];

export const UseEmployeeCustomers = () => employeeCustomerCollection.slice();

export const getEmployeeCustomers = () => {
  return fetch("http://localhost:3000/employeeCustomers")
    .then(res => res.json())
    .then(
      parsedEmployeeCustomers =>
        (employeeCustomerCollection = parsedEmployeeCustomers.slice())
    );
};
