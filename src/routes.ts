import { Router } from 'express';

const routes = Router();

routes.get('/', async (req, res) => res.json({ message: 'Dale' }));

export default routes;
