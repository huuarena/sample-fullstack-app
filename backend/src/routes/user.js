import express from 'express'
import Controller from './../controllers/user.js'
import MulterUpload from './../connector/multer/index.js'

const router = express.Router()

router.post('/login', MulterUpload.none(), Controller.login)
router.post('/me', MulterUpload.none(), Controller.getByToken)
router.get('/count', Controller.count)
router.get('/', Controller.find)
router.get('/:id', Controller.findById)
router.post('/', MulterUpload.none(), Controller.create)
router.put('/:id', MulterUpload.none(), Controller.update)
// router.delete('/:id', Controller.delete)

export default router
