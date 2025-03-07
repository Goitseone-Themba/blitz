import express from 'express';
import { handleChat, getChat, createBookmark, getBookmarks, deleteBookmark, } from "../controllers/chat";
import { createNote, getNotes } from '../controllers/notes';

const router = express.Router();

router.post('/chat', handleChat);
router.get('/chat/:chatId', getChat);
router.post('/bookmark', createBookmark);
router.get('/bookmarks', getBookmarks);
router.delete('/bookmark/:bookmarkId', deleteBookmark);
router.post('/notes', createNote);
router.get('/notes', getNotes);

export const chatRoutes = router;
