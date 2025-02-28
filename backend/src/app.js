import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
import userRouter from "./routes/user.route.js";
import todoRouter from "./routes/todo.routes.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);

export { app };
