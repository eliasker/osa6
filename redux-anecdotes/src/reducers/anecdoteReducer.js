import anecdoteService from "../services/anecdoteService"

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'VOTE':
			const newState = state.map(a => a.id !== action.data.id ? a : action.data)
			return newState.sort((a, b) => (b.votes - a.votes))
		case 'ADD':
			return [...state, action.data]
		case 'INIT':
			return action.data
		default:
			return state
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT',
			data: anecdotes,
		})
	}
}

export const createAnecdote = (data) => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(data)
		dispatch({
			type: 'NEW',
			data: newAnecdote
		})
	}
}

export const voteAnecdote = (anecdote) => {
	return async dispatch => {
		const voted = await anecdoteService.update(anecdote.id, {...anecdote, votes: anecdote.votes + 1})
		dispatch({
			type: 'VOTE',
			data: voted
		})
	}
}

export default reducer