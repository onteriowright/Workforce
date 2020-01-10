import { useEmployees } from "./EmployeeDataProvider.js";
import { useComputers } from "../ComputerComponents/ComputerDataProvider.js";
import { EmployeeComponent } from "./EmployeeComponent.js";
import { useDepartments } from "../DepartmentComponents/DepartmentDataProvider.js";
import { useLocations } from "../LocationsComponents/LocationsDataProvider.js";
import { UseCustomers } from "../LocationsComponents/CustomerDataProvider.js";
import { UseEmployeeCustomers } from "../LocationsComponents/EmployeeCustomerDataProvider.js";

export const EmployeeListComponent = () => {
  const targetElement = document.querySelector("#employees-products");

  const employees = useEmployees();
  const computers = useComputers();
  const departments = useDepartments();
  const locations = useLocations();
  const customers = UseCustomers();
  const employeeCustomers = UseEmployeeCustomers();

  const renderData = () => {
    targetElement.innerHTML = `
    <h1 class="heading">Workforce Employees</h1>
    <section class="display">
      ${employees
        .map(employee => {
          const product = computers.find(
            computer => computer.id === employee.computerId
          );

          const department = departments.find(
            departmentId => departmentId.id === employee.departmentId
          );

          const location = locations.find(
            locationId => locationId.id === employee.locationId
          );

          const employeeCustomerRelationships = employeeCustomers.filter(
            employeeCustomer => employeeCustomer.employeeId === employee.id
          );

          const foundCustomers = employeeCustomerRelationships.map(
            employeeCustomerRelatonship => {
              const foundCustomer = customers.find(
                customer =>
                  customer.id === employeeCustomerRelatonship.customerId
              );
              return foundCustomer;
            }
          );

          const htmlRepresentation = EmployeeComponent(
            employee,
            product,
            department,
            location,
            foundCustomers,
            employeeCustomers
          );
          return htmlRepresentation;
        })
        .join("")}
    </section>
      `;
  };
  renderData();
};
