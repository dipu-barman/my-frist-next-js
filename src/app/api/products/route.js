import clientPromise from "../../../lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth"; 

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const data = await req.json();

  if (!data.name || !data.description || !data.price) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("tourZoneDB");

    const result = await db.collection("products").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
  }
}
