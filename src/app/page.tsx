import { checkConnections } from './utils/checkConnections';

export default async function HomePage() {
  // Run the MongoDB and server connection check when the page loads
  await checkConnections(); // Make sure the connections are checked when the page is loaded

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}