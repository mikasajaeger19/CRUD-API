import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
// browser only create get requests. we use postman to create post requests.

const router = express.Router();

//in json the keys of the objects require double quotes this is just js
//all routes in here start with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);
	
//req is request object, res is response object

export default router;
 