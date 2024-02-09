const express = require('express');
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const dbConfig = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const authenticate = require("./authentication");

require("dotenv").config();
const port = process.env.PORT || 4001;

const app = express();
dbConfig.main(); //CONNECT TO MONGODB

app.use(session({
  secret: `${process.env.SECRET_KEY}`,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({origin: "http://localhost:5173", credentials:true}));

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
