import { Component } from "../modules/component/entities/Component";
import { between, randomNumberWithInterval } from "./numbers";

function getNextComponent(components: Component): string {
    const randomNumber = randomNumberWithInterval(0, 100);
    let nextName = '';
    components.next.forEach(nextComponent => {
        if(between(randomNumber, nextComponent.percent.initial, nextComponent.percent.final)){
            nextName = nextComponent.name;
        }
    });
    return nextName;
}

export { getNextComponent }