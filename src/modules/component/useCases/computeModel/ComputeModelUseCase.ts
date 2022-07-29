import { randomNumberWithInterval } from "../../../../utils/numbers";
import { IModelsRepository } from "../../repositories/IModelsRepository";

class ComputeModelUseCase{
    constructor(private modelsRepository: IModelsRepository){}

    execute(id: string){
              
        for (let i = 0; i < model.qtyUser; i++) {
            console.log(randomNumberWithInterval(model.components[0].randomTimeServer[0].initial, model.components[0].randomTimeServer[0].final));
        }
    }
}

export { ComputeModelUseCase }