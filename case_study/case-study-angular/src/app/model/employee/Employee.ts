import {EmployeeDegree} from './EmployeeDegree';
import {EmployeePosition} from './EmployeePosition';
import {EmployeeDivision} from './EmployeeDivision';

export interface Employee {
  id: number;
  name: string;
  dOB: string;
  identityNum: string;
  phoneNum: string;
  email: string;
  address: string;
  salary: number;
  degree: EmployeeDegree;
  position: EmployeePosition;
  division: EmployeeDivision;
}
