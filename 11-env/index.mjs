import path from 'path';
// Need to fixed missed folder '11-env' in path
const pathToEnv = path.resolve(process.cwd(), '11-env', '.env');
import { config } from 'dotenv';

// Imports entire module including default export
// import * as dotenv from 'dotenv';
// dotenv.config({ path: pathToEnv });

config({ path: pathToEnv });

console.log(process.env.DB_USER_NAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
