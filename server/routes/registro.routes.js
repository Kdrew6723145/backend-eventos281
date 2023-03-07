import {Router} from 'express'
import { registrarUsuario } from '../controllers/registro.controllers.js';

const router = Router()

router.post('/registro',registrarUsuario);

export default router;