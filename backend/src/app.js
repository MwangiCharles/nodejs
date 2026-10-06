import express from "express";

const app = express(); //create an express application

app.use(express.json()); //middleware to parse json data


//routes import
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

//example route:  http://localhost:4000/api/v1/users/register

export default app;