import * as dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const db = client.db('blitz');
const sessionCollection = db.collection('pomodoro_sessions');

export const logSession = async (req: Request, res: Response) => {
    const { duration, type } = req.body; // weather it's work or break
    await sessionCollection.insertOne({ duration, type, timestamp: new Date() });
    res.json({ success: true });
};
