import express from "express";
import { getUsers, getTime, useWhichIp } from "./database.service";
const app = express();

app.get("/", (req, res) => {
  const ip_type = useWhichIp();
  const message = `Hello from Cloud SQL:Postgres Nodejs Connector : ${ip_type} Demo`;
  res.send(message);
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.get("/get-time", async (req, res) => {
  const result = await getTime();
  res.json(result);
});

const port = parseInt(process.env.PORT as string) || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
