import { v4 as uuidV4 } from 'uuid';
import { Interval } from "./Interval";
import { Statistics } from './Statistics';

class TemporaryUser{
    id: string;
    name: string;
    timeInOut: Interval;
    stayTime: number;
    statistics: Statistics[];

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }

        this.timeInOut = new Interval();
    }
}

export { TemporaryUser }