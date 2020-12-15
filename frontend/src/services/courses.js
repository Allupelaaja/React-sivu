import axios from 'axios';

const baseUrl = '/api/courses';

const getAll = () => axios.get(baseUrl);

const getById = (id) => axios.put(`${baseUrl}/${id}`);

const create = (newObject) => axios.post(baseUrl, newObject);

const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject);

const deleteItem = (id) => axios.delete(`${baseUrl}/${id}`);

export default {
  getAll,
  getById,
  create,
  update,
  deleteItem,
};
