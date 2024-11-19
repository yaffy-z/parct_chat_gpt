import { checkConnections } from "../../utils/checkConnections";

export async function GET() {
  try {
    await checkConnections();  // Calls the function to check both the server and MongoDB connection
    return new Response('Server and MongoDB are connected successfully!');
  } catch (error) {
    return new Response('Error connecting to the server or MongoDB.', { status: 500 });
  }
}
