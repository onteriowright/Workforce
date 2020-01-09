import { getEmployees } from "./EmployeeComponents/EmployeeDataProvider.js";
import { getComputers } from "./ComputerComponents/ComputerDataProvider.js";
import { EmployeeListComponent } from "./EmployeeComponents/EmployeeListComponent.js";
import { getDepartments } from "./DepartmentComponents/DepartmentDataProvider.js";
import { getLocations } from "./LocationsComponents/LocationsDataProvider.js";
import { getCustomers } from "./LocationsComponents/CustomerDataProvider.js";
import { getEmployeeCustomers } from "./LocationsComponents/EmployeeCustomerDataProvider.js";

getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(getLocations)
  .then(getCustomers)
  .then(getEmployeeCustomers)
  .then(EmployeeListComponent);
