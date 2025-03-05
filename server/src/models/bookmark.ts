import { ObjectId } from "mongodb";

export interface Bookmark {
    _id?: ObjectId;
    chatId: string;
    messageId: string;
    question: string;
    answer: string;
    timestamp: string;
}
