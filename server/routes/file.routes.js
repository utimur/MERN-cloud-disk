const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')

router.post('', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFile)
router.get('', authMiddleware, fileController.getFiles)


module.exports = router
