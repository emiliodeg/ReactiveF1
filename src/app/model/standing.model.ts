import { Driver } from './driver.model';
import { Constructor } from './result.model';

export interface Standing {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
