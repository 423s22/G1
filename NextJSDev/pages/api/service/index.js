import dbConnect from "../../../utils/mongo";
import Service from "../../../models/Service";

export default async function handler(req, res) {
  const  method = req;

dbConnect();

  if (method === "GET") {
  }
  if (method === "POST") {
    try {
        const service = await Service.create(req.body);
        res.status(201).json(service)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
