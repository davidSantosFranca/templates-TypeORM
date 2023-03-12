import * as express from 'express';
import routes from './routes';
import db from './db/data-source';

//establish connection to database
db.initialize()
    .then(() => {
        console.log("Database connection established");
    })
    .catch((error) => {
        console.log("Error connecting to database: " + error);
    });

// Create and setup express app
const app = express();
app.use(express.json());

//register routes
app.use("/", routes)

// start express server
app.listen(3000)