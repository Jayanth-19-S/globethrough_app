import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./config/connect";
import authrouter from "./routes/auth.route";
import userrouter from "./routes/user.route";
import adminrouter from "./routes/admin.route";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8600;
console.log(process.env.PORT);
connectToDb();
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Hi I am on for globethrough",
    success: true,
  });
});
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/user", userrouter);
app.use("/api/v1/admin", adminrouter);
app.listen(port, () => {
  console.log(`Iam listening on port ${port}`);
});
