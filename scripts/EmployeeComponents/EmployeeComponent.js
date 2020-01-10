export const EmployeeComponent = (
  employee,
  product,
  departments,
  locations,
  customers
) => {
  return `
  <section class="display-template">
    <div class="display-info"><h3>${employee.firstName} ${
    employee.lastName
  }</h3></div>
    <div class="display-info">Age ${employee.age}</div>
    <div class="display-info">Currenting using a   ${product.model}</div>
    <div class="display-info">Works in the ${
      departments.department
    } department</div>
    <div class="display-info">Works at the ${locations.location} Office</div>
    <div class="display-info">Clients:</div>
    <ol class="display-info">
      ${customers.map(customer => `<li>${customer.businessName}</li>`).join("")}
    </ol>
  </section>
    `;
};
