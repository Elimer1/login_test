import bcrypt from "bcrypt";
import fs from "fs/promises";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { username, email, password: hashedPassword };

  const response = await fs.readFile("users.json");
  const users = JSON.parse(response);

  for (let user of users) {
    if (user.email === email) {
      return res.status(409).json({ error: "email already exists" });
    }
  }
  users.push(user);

  await fs.writeFile("users.json", JSON.stringify(users));

  res.status(200).json({ user });
};

// const name = await fs.readFile("users.json");
// const names = JSON.parse(name);
// names.push({ name: "new Name" });
// await fs.writeFile("users.json", JSON.stringify(names));
// console.log(names);
