const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const BookRouter = require("./app/routes/BookRoute");
const UserRouter = require("./app/routes/UserRoute");



const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcom to contact book application."});
});

app.use("/api/users", UserRouter);
app.use("/api/books", BookRouter);



app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;