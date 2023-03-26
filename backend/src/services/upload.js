import CloudinaryUploader from '../connector/cloudinary/index.js'

export default {
  upload: async (files) => {
    try {
      let result = [],
        uploaded = null

      // upload to cloudinary
      for (let i = 0; i < files.length; i++) {
        uploaded = await CloudinaryUploader.upload(files[i])
        result.push({ url: uploaded.url })
      }

      return result
    } catch (error) {
      throw error
    }
  },
}
