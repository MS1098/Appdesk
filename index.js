require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const path=require("path");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


__dirname = path.resolve();
if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "client","build","index.html"))
})
}else{
    app.get("/",(req,res)=>{
        res.send("API is running....");
    })
}

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
