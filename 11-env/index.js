const path = require('path');

// Need to fixed missed folder '11-env' in path
const pathToEnv = path.resolve(process.cwd(), '11-env', '.env');

require('dotenv').config({ path: pathToEnv });

console.log(process.env.DB_USER_NAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
