/**
 * Helper function to generate contentDigest from data of the node
 */
const crypto = require('crypto')

module.exports = data =>
  crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`)