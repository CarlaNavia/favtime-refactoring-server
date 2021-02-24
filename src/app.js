require("dotenv").config();
import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes";
import bodyParser from "body-parser";
const cors = require("cors");

const app = express();

// Initialize MongoDB
import "./db/initialize";

app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN],
  })
);

app.use(cookieParser());

app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use("/api", routes);


export default app;
