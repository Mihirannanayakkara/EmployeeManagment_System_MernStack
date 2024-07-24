import express, { request, response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import employeeRoute from "./routes/employeeRoute.js";
import paySheetRoute from "./routes/paysheetRoute.js";
import leaveRoute from "./routes/leaveRoute.js"
import employeeLoginRoute from "./routes/employeeLoginRoute.js"
import cors from "cors";


const app = express();

//Middlware for parsing request body
app.use(express.json());


//Middlware for handling cors ploicy request body
app.use(cors());


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to mern stack')
});

app.use('/crud',employeeRoute);

app.use('/pay-sheets', paySheetRoute);

app.use('/leaves', leaveRoute);

app.use('/login' , employeeLoginRoute);

//DB coonnection
mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    }); 
    // server is running
}).catch((error)=>{
    console.log(error);
});




