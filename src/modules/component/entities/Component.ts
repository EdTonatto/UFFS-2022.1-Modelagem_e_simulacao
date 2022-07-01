import { Interval } from "./Interval"
import { Next } from "./Next"

class Component {
    name: string;
    qtyServer: number;
    randomTimeServer: Interval[];
    flagBusy: Boolean[];
    timeInOut: Interval[];
    next: Next[];
}

export { Component }