import { getNextComponent } from "../../../../utils/nextComponent";
import { randomNumberWithInterval } from "../../../../utils/numbers";
import { Component } from "../../entities/Component";
import { Interval } from "../../entities/Interval";
import { TemporaryUser } from "../../entities/TemporaryUser";
import { IModelsRepository } from "../../repositories/IModelsRepository";
import { ComponentsRepository } from "../../repositories/implementations/ComponentsRepository";

class ComputeModelUseCase{
    constructor(private modelsRepository: IModelsRepository){}

    computeComponent(temporaryUser: TemporaryUser, component: Component){

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
            this.computeComponent(temporaryUser, ComponentsRepository.getInstance().findByName(getNextComponent(initialComponent)));
        }
    }
}

export { ComputeModelUseCase }