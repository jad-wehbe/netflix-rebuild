require("dotenv").config({ path: "./config.env" });
const express = require("express");

const app = express();

// const cors = require("cors");

const port = process.env.PORT || 5000;

// app.use(cors());

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
