import express from 'express';
import authUser from '../middlewares/auth.js';
import { createInitiative,fetchJoins,getInitiatives,memberAction } from '../controllers/initiative.controller.js';

const initiativeRouter = express.Router();

initiativeRouter.post('/create', authUser, createInitiative);
initiativeRouter.get('/getinitiatives', getInitiatives);
initiativeRouter.post('/memberaction', authUser, memberAction);

initiativeRouter.get(":id",fetchJoins);

export default initiativeRouter;