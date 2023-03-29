import Model from '../models/country.js'
import ErrorCodes from '../constants/errorCodes.js'
import generatePagination from '../helpers/generatePagination.js'

const count = async (where) => {
  return await Model.count(where)
}

const find = async ({ page, limit, where }) => {
  let _page = page >= 1 ? page : 1
  let _limit = limit >= 1 && limit <= 100 ? limit : 25
  let _where = where || {}

  let filter = {
    where: _where,
    limit: _limit,
    offset: (_page - 1) * _limit,
    order: [['updatedAt', 'DESC']],
  }

  const count = await Model.count({ where: _where })
  const items = await Model.findAll(filter)

  return {
    items: items.map((item) => item.toJSON()),
    ...generatePagination(_page, _limit, count),
  }
}

const findById = async (id) => {
  const entry = await Model.findOne({ where: { id } })
  if (!entry) {
    throw new Error(ErrorCodes.NOT_FOUND)
  }

  return entry.toJSON()
}

const create = async (data) => {
  const created = await Model.create(data)

  return created.toJSON()
}

const update = async (id, data) => {
  const updated = await Model.update(data, { where: { id }, returning: true, plain: true })

  return updated[1].toJSON()
}

const _delete = async (id) => {
  return await Model.destroy({ where: { id } })
}

export default {
  count,
  find,
  findById,
  create,
  update,
  delete: _delete,
}
