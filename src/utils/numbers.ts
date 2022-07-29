function between(x: number, min: number, max: number) {
    return x >= min && x <= max;
}

function randomNumberWithInterval(min: number, max: number): number{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export { between, randomNumberWithInterval }