import { MongoClient } from "mongodb";
const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error("please define vars");
}

if (!MONGODB_DB) {
  throw new Error("please define vars");
}

let cached = global.mongo;
if (!cached) cached = global.mongo = {};

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const conn = {};
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(MONGODB_URI, opts)
      .then((client) => {
        conn.client = client;
        return client.db(MONGODB_DB);
      })
      .then((db) => {
        conn.db = db;
        cached.conn = conn;
      });
  }

  await cached.promise;
  return cached.conn;
}
// import mongoose from "mongoose";

// const connection = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }

//   const db = await mongoose.connect(
//     "mongodb+srv://phigeh:Pass123!@cluster0.kthn1.mongodb.net/medicalTransparency?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );

//   connection.isConnected = db.connections[0].readyState;
// }

// export default dbConnect;
