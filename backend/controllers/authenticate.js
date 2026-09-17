import jwt from "jsonwebtoken";

export const authenticate = (req, res) => {
  const token = req.headers("authorization").split(" ")[1];
  jwt.verify(token);
};
