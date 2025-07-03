import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postsRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(postsRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));


const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://           @linkedinclone.fkm40cq.mongodb.net/?retryWrites=true&w=majority&appName=LinkedinClone");
    
    app.listen(9080, () => {
        console.log("Server is running on port 9080");
    });
};

start();