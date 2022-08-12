import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import AgeController from "./src/controllers/age.controller";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3310;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    ip: req.ip,
    author: "Afolabi Samuel Adedeji",
    routes: {
      getAge: "/howold",
    },
  });
});

app.get("/howold", (req: Request, res: Response) => {
  return new AgeController().getAge(req, res);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app; // for testing
