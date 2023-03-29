import ResponseHandler from '../helpers/responseHandler.js'
import Upload from '../middlewares/upload.js'

export default {
  upload: async (req, res) => {
    try {
      const data = await Upload.upload(req.files)

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
