import express from "express";
import { registerUser } from "./controllers/register.js";
import { login } from "./controllers/login.js";
import { getProfile } from "./controllers/profile.js";
import dotenv from "dotenv";
import cors from "cors";
import { authenticate } from "./controllers/authenticate.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;

app.post("/register", registerUser);
app.post("login", login);
app.get("/profile", getProfile);
app.get("authenticate", authenticate);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
