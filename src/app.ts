import express from "express";
import cors from "cors";
import logger from "morgan";
import { router } from "./routes/index";

//cria o app
export const app = express();

// config dos middlewares
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

//integra o endpoint na aplicação
app.use("/", router);
