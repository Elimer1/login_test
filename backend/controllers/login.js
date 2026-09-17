import bcrypt from "bcrypt";
import fs from "fs/promises";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const response = fs.readFile("users.json");
  const users = JSON.parse(response);

  for (let user of users) {
    if (user.email === email) {
      const match = bcrypt.compare(user.password, password);
      if (match) {
        const token = jwt.sign(
          { email: user.email, password: user.password },
          process.env.JWT_SECRET,
        );
        sessionStorage.setItem("token", token);
        return res.status(200).json({ success: "logged in" });
      } else {
        return res.status(200).json({ message: "invalid email or password" });
      }
    }
  }
  return res.status(404).json({ error: "user not found" });
};
