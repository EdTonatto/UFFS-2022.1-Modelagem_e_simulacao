import express, { Request, Response } from 'express';
import { read } from './utils/readInputFile';

const app = express();

app.use('/', (request: Request, response: Response) => {
    response.json({message: read()}).send();
})

app.listen(3333, () => console.log('Server is running!'));