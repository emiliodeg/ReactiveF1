import { Driver } from './driver.model';
import { Constructor } from './result.model';

export interface Qualify {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}
