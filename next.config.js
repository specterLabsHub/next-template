const withImages = require('next-images')
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
})