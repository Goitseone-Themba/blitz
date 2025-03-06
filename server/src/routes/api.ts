import express from 'express';
import { handleChat, getChat, createBookmark, getBookmarks, deleteBookmark, } from "../controllers/chat";

const router = express.Router();

router.post('/chat', handleChat);
router.get('/chat/:chatId', getChat);
router.post('/bookmark', createBookmark);
router.get('/bookmarks', getBookmarks);
router.delete('/bookmark/:bookmarkId', deleteBookmark);

export const chatRoutes = router;
