import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || '';

const connection : { isConnected? : number } = {};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

export async function MongoDB() 
{
    if(connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;
}