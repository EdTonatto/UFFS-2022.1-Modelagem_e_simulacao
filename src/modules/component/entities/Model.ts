import { Component } from "./Component";
import { v4 as uuidV4 } from 'uuid';

class Model {
    id: string;
    name: string;
    components: Component[];
    qtyUser: number;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
    }
}

export { Model };