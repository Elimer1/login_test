export const getProfile = async (req, res) => {
  const response = fs.readFile("users.json");
  const users = JSON.parse(response);

  return res.status(200).json({ users });
};
