interface ICreateIntervalDTO {
    initial: number;
    final: number;
}

interface ICreateNextDTO {
    percent: number;
    name: string
}

interface ICreateComponentDTO {
    name: string;
    qtyServer: number;
    randomTimeServer: ICreateIntervalDTO[];
    flagBusy: Boolean[];
    timeInOut: ICreateIntervalDTO[];
    next: ICreateNextDTO[];
}

export { ICreateComponentDTO }