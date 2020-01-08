import { getEmployees } from "./EmployeeComponents/EmployeeDataProvider.js";
import { getComputers } from "./EmployeeComponents/ComputerDataProvider.js";
import { EmployeeListComponent } from "./EmployeeComponents/EmployeeListComponent.js";
import { getDepartments } from "./EmployeeComponents/DepartmentDataProvider.js";
import { getLocations } from "./EmployeeComponents/LocationsDataProvider.js";

getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(getLocations)
  .then(EmployeeListComponent);
