import Model from '../models/country.js'
import ErrorCodes from '../constants/errorCodes.js'
import generatePagination from '../helpers/generatePagination.js'

const count = async (where) => {
  try {
    return await Model.count(where)
  } catch (error) {
    throw error
  }
}

const find = async ({ page, limit, where }) => {
  try {
    let _page = page >= 1 ? page : 1
    let _limit = limit >= 1 ? limit : 25
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
  } catch (error) {
    throw error
  }
}

const findById = async (id) => {
  try {
    const entry = await Model.findOne({ where: { id } })
    if (!entry) {
      throw new Error(ErrorCodes.NOT_FOUND)
    }

    return entry.toJSON()
  } catch (error) {
    throw error
  }
}

const create = async (data) => {
  try {
    const created = await Model.create(data)

    return created.toJSON()
  } catch (error) {
    throw error
  }
}

const update = async (id, data) => {
  try {
    const updated = await Model.update(data, { where: { id }, returning: true, plain: true })

    return updated[1].toJSON()
  } catch (error) {
    throw error
  }
}

const _delete = async (id) => {
  try {
    return await Model.destroy({ where: { id } })
  } catch (error) {
    throw error
  }
}

export default {
  count,
  find,
  findById,
  create,
  update,
  delete: _delete,
}
