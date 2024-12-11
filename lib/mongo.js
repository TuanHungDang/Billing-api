import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // Thay thế với URL MongoDB của bạn
let db;

export async function connectToDb() {
  if (db) return db; // Nếu đã kết nối thì trả về kết nối cũ

  const client = new MongoClient(uri);

  try {
    await client.connect();
    db = client.db("Billing"); // Database name
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
}

// Hàm để lấy collection users
export async function getUsersCollection() {
  const db = await connectToDb();
  return db.collection("users");
}

