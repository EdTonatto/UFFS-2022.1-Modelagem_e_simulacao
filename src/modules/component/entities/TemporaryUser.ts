import { v4 as uuidV4 } from 'uuid';
import { Interval } from "./Interval";

class TemporaryUser{
    id: string;
    name: string;
    timeInOut: Interval;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }

        this.timeInOut = new Interval();
    }
}

export { TemporaryUser }