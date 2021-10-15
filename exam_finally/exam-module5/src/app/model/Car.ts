import {TypeCar} from './TypeCar';
import {Start} from './Start';
import {End} from './End';

export interface Car {
  id: number;
  code: string;
  type: TypeCar;
  name: string;
  start: Start;
  end: End;
  phone: string;
  email: string;
  timeStart: string;
  timeEnd: string;
}
