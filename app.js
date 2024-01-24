require("dotenv").config();
const express = require("express");
const router = require("./routes/student", "./routes/matakuliah");

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    return res.status(200).json({
        message: "Hello from Express",
    });
});

app.use("/api", router);

app.listen(3000, () =>{
    console.log("server listening at http://localhost:3000");
});