import {Film} from './Film';

export interface Slot {
  id: number;
  code: string;
  date: string;
  amount: number;
  film: Film;
}
