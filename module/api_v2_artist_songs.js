// 歌手专辑列表，新API

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 100,
    offset: query.offset || 0,
    e_r: query.er || true,
    header: query.header || '',
  }
  return request('POST',`/api/v2/artist/songs`, data, createOption(query, 'weapi'))
}
