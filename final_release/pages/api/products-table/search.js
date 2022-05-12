import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const term = req.query.term;

  const data = await db
    .collection("services")
    .aggregate([
      {
        $search: {
          search: {
            query: term,
            path: [
              "description",
              "rate",
              "hospital",
              "procedureNumber",
              "chargeCode",
            ],
          },
        },
      },
      {
        $limit: 200,
      },
    ])
    .toArray();

  res.json(data);
}
