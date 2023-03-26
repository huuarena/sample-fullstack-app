import Repository from '../repositories/country.js'

export default {
  count: async (where) => await Repository.count(where),
  find: async (filter) => await Repository.find(filter),
  findById: async (id) => await Repository.findById(id),
  create: async (data) => await Repository.create(data),
  update: async (id, data) => await Repository.update(id, data),
  delete: async (id) => await Repository.delete(id),
}
