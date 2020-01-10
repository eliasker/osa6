import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const createNew = async (content) => {
	const anecdote = { content, votes: 0 }
	return await axios.post(baseUrl, anecdote).data
}

const update = async (id, newAnecdote) => {
	const request = axios.put(`${baseUrl}/${id}`, newAnecdote)
	const response = await request
	return response.data
}

export default { getAll, createNew, update }