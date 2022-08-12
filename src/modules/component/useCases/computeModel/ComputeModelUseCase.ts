import { getNextComponent } from "../../../../utils/nextComponent";
import { randomNumberWithInterval } from "../../../../utils/numbers";
import { Component } from "../../entities/Component";
import { Interval } from "../../entities/Interval";
import { TemporaryUser } from "../../entities/TemporaryUser";
import { IModelsRepository } from "../../repositories/IModelsRepository";
import { ComponentsRepository } from "../../repositories/implementations/ComponentsRepository";

class ComputeModelUseCase{
    constructor(private modelsRepository: IModelsRepository){}

    computeComponent(temporaryUser: TemporaryUser, timeIn: number, component: Component){
        const nextComponent = ComponentsRepository.getInstance().findByName(getNextComponent(component));
        let timeOut = timeIn;
        if(nextComponent) {
            if (component.randomTimeServer){
                const timeStay = randomNumberWithInterval(component.randomTimeServer[0].initial,  
                                                        component.randomTimeServer[0].final);
                
                timeOut += timeStay;
                console.log(`${component.name} - [${timeStay}] ${timeIn} => ${timeOut}`)
            } else {
                console.log(component.name)
            }
            this.computeComponent(temporaryUser, timeOut, nextComponent);
        }else{
            temporaryUser.timeInOut.final = timeOut;
            const stayTime = temporaryUser.timeInOut.final - temporaryUser.timeInOut.initial;
            temporaryUser.stayTime = stayTime;
            console.log(`Tempo de permanencia no sistema: ${stayTime}`)
            console.log('------------------------------')
            return null;
        }
        return null;
    }

    execute(id: string){
        const model = this.modelsRepository.findById(id);
        const initialComponent = model.components[0];
        const temporaryUsers: TemporaryUser[] = [];
        let time = 0;
        for (let i = 0; i < model.qtyUser; i++) {
            const temporaryUser = new TemporaryUser();
            time = time + randomNumberWithInterval(initialComponent.randomTimeServer[0].initial, 
                                                   initialComponent.randomTimeServer[0].final);
            temporaryUser.name = `User ${i}`;
            temporaryUser.timeInOut.initial = time;
            console.log(temporaryUser.name)
            this.computeComponent(temporaryUser, 
                                  temporaryUser.timeInOut.initial, 
                                  ComponentsRepository.getInstance()
                                                      .findByName(getNextComponent(initialComponent)));
        }
    }
}

export { ComputeModelUseCase }