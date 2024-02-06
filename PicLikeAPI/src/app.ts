import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { pickLikeRouter } from './routers/piclike-routes';

const swaggerFile = require('../swagger_output.json')

const app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

// Routes
app.use('/', pickLikeRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app;
