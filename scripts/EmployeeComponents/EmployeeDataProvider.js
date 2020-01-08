let employeeCollection = [];

export const useEmployees = () => employeeCollection.slice();

export const getEmployees = () => {
  return fetch("http://localhost:3000/employees")
    .then(res => res.json())
    .then(parsedData => (employeeCollection = parsedData.slice()));
};
