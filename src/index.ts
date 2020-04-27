import express from 'express';
import path from 'path';
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('index');
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});