let departmentCollection = [];

export const useDepartments = () => departmentCollection.slice();

export const getDepartments = () => {
  return fetch("http://localhost:3000/departments")
    .then(res => res.json())
    .then(parsedData => (departmentCollection = parsedData.slice()));
};
