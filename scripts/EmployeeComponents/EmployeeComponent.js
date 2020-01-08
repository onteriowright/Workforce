export const EmployeeComponent = (
  employee,
  product,
  departments,
  locations
) => {
  return `
    <div><h3>${employee.firstName} ${employee.lastName}</h3></div>
    <div>Age: ${employee.age}</div>
    <div>Currenting using a : ${product.model}</div>
    <div>Works in the ${departments.department} department</div>
    <div>Works at the ${locations.location} Office</div>
    `;
};
