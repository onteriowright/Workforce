import { useEmployees } from "./EmployeeDataProvider.js";
import { useComputers } from "./ComputerDataProvider.js";
import { EmployeeComponent } from "./EmployeeComponent.js";
import { useDepartments } from "./DepartmentDataProvider.js";
import { useLocations } from "./LocationsDataProvider.js";

export const EmployeeListComponent = () => {
  const targetElement = document.querySelector("#employees-products");

  const employees = useEmployees();
  const computers = useComputers();
  const departments = useDepartments();
  const locations = useLocations();
  console.log(locations);

  const renderData = () => {
    targetElement.innerHTML = `
    <div><h2>Workforce Employees</h2></div>
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
        const htmlRepresentation = EmployeeComponent(
          employee,
          product,
          department,
          location
        );
        return htmlRepresentation;
      })
      .join("")}`;
  };
  renderData();
};
