import dbConnect from "../../../utils/mongo";
import Team from "../../../models/Team";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const team = await Team.findById(id);
      res.status(200).json(team);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const team = await Team.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(team);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      await Team.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
