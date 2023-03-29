import CloudinaryUploader from '../connector/cloudinary/index.js'

const Upload = {
  upload: async (files) => {
    try {
      let result = [],
        uploaded = null

      // upload to cloudinary
      for (let i = 0; i < files.length; i++) {
        uploaded = await CloudinaryUploader.upload(files[i])
        result.push(uploaded)
      }

      return result
    } catch (error) {
      console.log('upload error :>> ', error)
      throw error
    }
  },
}

export default Upload
