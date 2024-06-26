import axios from 'axios'

const baseURL = `http://localhost:3001/persons`

const getAll = () => {
    return axios.get(baseURL)
}

const create = (newPerson) => {
    return axios.post(baseURL, newPerson)
}

const deleteParticular = (id,) => {
    return axios.delete(`${baseURL}/${id}`)
}

const update = (id, changedPerson) => {
    return axios.put(`${baseURL}/${id}`, changedPerson)
}

export default { getAll, create, deleteParticular, update }