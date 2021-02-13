//Declaration of all the routes for the memes
import express from 'express';

import { getMemes ,createMeme,updateMeme,deleteMeme ,likeMeme,getMemesByID} from '../controllers/memes.js'
const router = express.Router();

router.get('/', getMemes);
router.post('/', createMeme);
router.get('/:id',getMemesByID);
router.patch('/:id',updateMeme);
router.delete('/:id',deleteMeme);
router.patch('/:id/likepost',likeMeme);

export default router;