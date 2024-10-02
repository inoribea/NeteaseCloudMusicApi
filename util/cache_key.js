// from https://rocka.me/article/netease-cloud-music-cache-key-reverse
const crypto = require('crypto')
const qs = require('querystring')
/**
 * @param {Record<string, any>} params
 */
function encode(params) {
  const keys = Object.keys(params).sort(
    (a, b) => a.codePointAt(0) - b.codePointAt(0),
  )
  /** @type {Record<string, string>} */
  const record = {}
  for (const k of keys) {
    record[k] = params[k]
  }
  const text = qs.stringify(record)
  const cipher = crypto.createCipheriv('aes-128-ecb', ')(13daqP@ssw0rd~', null)
  const key = cipher.update(text, 'utf8', 'base64') + cipher.final('base64')
  return key
}

function getCacheKey(id) {
  return encode({
    id: id,
    e_r: true,
  })
}

module.exports = getCacheKey
