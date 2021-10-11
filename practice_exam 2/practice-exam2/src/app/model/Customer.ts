import {TypeCustomer} from './TypeCustomer';

export interface Customer {
  id: number;
  name: string;
  code: string;
  dOB: string;
  email: string;
  phoneNum: string;
  typeCustomer: TypeCustomer;
}
