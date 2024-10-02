// 手机端的专辑详情页

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    e_r: query.er || true,
    cache_key: require('../util/cache_key')(query.id),
    header: '',
  }
  return request(
    'POST',
    `/api/album/v3/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
