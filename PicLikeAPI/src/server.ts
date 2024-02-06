import dotenv from 'dotenv';
dotenv.config();

import { env } from './env';
import app from './app';

app.listen(env.PORT, () => console.log(`Server is running at ${env.PORT}.`));
