const express = require("express");
const config = require("./config/config.js");
const taskRoutes = require("./routes/taskRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
});