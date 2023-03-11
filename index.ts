import express, { Request, Response } from "express"
import cors from "cors"
import { TUser, TPosts, TPostsLike } from "./src/models/types";
import { User } from "./src/models/User";
import { Post } from "./src/models/Post";
import { UserDataBase } from "./src/database/UserDataBase";
import { PostDataBase } from "./src/database/PostDataBase";
import { UserController } from "./src/controller/UserController";
import { PostController } from "./src/controller/PostController";
import { userRouter } from "./src/Router/userRouter";
import { postRouter } from "./src/Router/postRouter";
import dotenv from "dotenv"
import { commentRouter } from "./src/Router/commentRouter";



dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})


app.use("/users", userRouter)

app.use("/posts", postRouter)

app.use("/comments", commentRouter)

