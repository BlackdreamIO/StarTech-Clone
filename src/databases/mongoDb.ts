import { MongoClient, Db } from 'mongodb';

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  const uri = process.env.MONGODB_URI || '';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    return { client, db };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Could not connect to the database');
  }
}
