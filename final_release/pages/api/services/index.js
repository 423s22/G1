import dbConnect from "../../../utils/mongo";
import Service from "../../../models/Service";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const services = await Service.find();
      res.status(200).json(services);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const service = await Service.create(req.body);
      res.status(201).json(service);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
