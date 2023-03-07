import express from "express";
import {PORT} from "./config.js"
import indexRoutes from "./routes/index.routes.js"
import taskRoutes from "./routes/tasks.routes.js"
import registroRoutes from "./routes/registro.routes.js"

const app = express();


app.use(express.json());


app.use(indexRoutes);


app.use(taskRoutes);

app.use(registroRoutes);



app.listen(PORT);
console.log(`Server is listening in port ${PORT}`);