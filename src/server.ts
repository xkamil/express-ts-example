import express from 'express';
import bodyParser from "body-parser";
import userRouter from "./router/UserRouter";

const app = express();

app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(8080, () => console.log('App started'))