import { Interval } from "./Interval"
import { Next } from "./Next"
import { v4 as uuidV4 } from 'uuid';

class Component {
    id: string;
    id_model: string;
    name: string;
    qtyServer: number;
    randomTimeServer: Interval[];
    flagBusy: Boolean[];
    timeInOut: Interval[];
    next: Next[];

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
    }
}

export { Component }