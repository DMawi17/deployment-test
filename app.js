import express from "express";
import dotenv from "dotenv";
// Reads values from the .env
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>My Node App</h1>");
});

app.listen(5000, () => {
    console.log("App listening on port 5000!");
});

console.log(process.env.API_KEY);
