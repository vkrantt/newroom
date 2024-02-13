import chalk from "chalk";
import jsonData from "./version.json" assert { type: "json" };
import express from "express";
const app = express();
app.use(express.json());

// Root route
app.get("/", (request, response) => {
  response.json({
    status: "ok",
    application: "Room",
    version: jsonData.version,
    author: jsonData.author,
  });
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(chalk.blue("----------------------------------------------"));
  console.log(chalk.yellow(`--- Server listening on http://localhost:${port}`));
});
