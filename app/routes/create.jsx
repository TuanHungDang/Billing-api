import { redirect } from "@remix-run/node";
import { getUsersCollection } from "../../lib/mongo";

export const action = async ({ request }) => {
  try {
    const formData = new URLSearchParams(await request.text());
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
    };

    const usersCollection = await getUsersCollection();
    await usersCollection.insertOne(user);

    // Redirect to the select plan page after saving user info
    return redirect("/app/pricing");
  } catch (error) {
    console.error("Error inserting data", error);
    return new Response("Error processing your request", { status: 500 });
  }
};
