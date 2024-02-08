import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

config();
const app = express();
// Connect to MongoDB
connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    console.log("Connnected to Mongoose successfully!");
  },
  (err) => {
    console.log("Error while connecting" + err);
  }
);

app.get("/", (req, res) => {
  res.send({ message: "Server started" });
});

app.listen(process.env.PORT || 4001, () => {
  console.log(`Server is running on port 4000`);
});
