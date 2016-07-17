import { Router } from 'express';
import * as ModelController from '../controllers/model.controller';
const router = new Router();

// Get all Posts
router.route('/models').get(ModelController.getModels);

// Get one post by cuid
router.route('/models/:id').get(ModelController.getModelById);

// Add a new Post
router.route('/models').post(ModelController.postModel);

// Delete a post by cuid
router.route('/models/:id').delete(ModelController.deleteModel);

export default router;
