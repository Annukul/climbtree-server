import express from "express";
import bp from "body-parser";
import morgan from "morgan";
import { config } from "dotenv";

const app = express();
config();   

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan('dev'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})