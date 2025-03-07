import { Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const db = client.db('blitz')
const notesCollection = db.collection('notes');

export const createNote = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const result = await notesCollection.insertOne({ title, content, createdAt: new Date() });
    res.json({ id: result.insertedId.toString() });
};

export const getNotes = async (_req: Request, res: Response) => {
    const notes = await notesCollection.find().toArray();
    res.json(notes.map((note) => ({ id: note._id.toString(), title: note.title, content: note.content, })));
};
