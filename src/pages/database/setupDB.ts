import mongoose from 'mongoose';
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env file');
}

let cachedConnection: typeof mongoose | null = null;

export const setupDB = async () => {
  if (cachedConnection) {
    console.log("Already Database connected!")
    return cachedConnection;
  }
  
  const dbConnection = await mongoose.connect(MONGODB_URI);
  
  console.log("Database connected successfully!")
  cachedConnection = dbConnection;

  return dbConnection;
};
