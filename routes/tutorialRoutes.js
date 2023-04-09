import { Router } from "express";
const tutorialRoutes = Router();

import tutorialController from "../controllers/tutorial.controller.js";
// /api/tutotials  common for all 
// root routes 


tutorialRoutes.get('/', tutorialController.findAll);
tutorialRoutes.post('/',tutorialController.create);
// tutorialRoutes.deleteAll('/',);


// id based routes 

tutorialRoutes.get('/:id',tutorialController.findOne);
tutorialRoutes.patch('/:id',tutorialController.update);
tutorialRoutes.delete('/:id',tutorialController.deleteOne); 


tutorialRoutes.get('/published',tutorialController.findAllPublished);

export default tutorialRoutes;