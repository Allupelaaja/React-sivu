import axios from 'axios';

const baseUrl = '/api/courses';

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => await axios.get(baseUrl);

const getById = async (id) => await axios.put(`${baseUrl}/${id}`)

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response
}

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response
}

const deleteItem = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response
}

export default {
  getAll,
  getById,
  create,
  update,
  deleteItem,
  setToken
};
