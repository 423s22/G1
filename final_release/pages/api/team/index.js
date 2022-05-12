import dbConnect from "../../../utils/mongo";
import Team from "../../../models/Team";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const teams = await Team.find();
      res.status(200).json(teams);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const team = await Team.create(req.body);
      res.status(201).json(team);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
