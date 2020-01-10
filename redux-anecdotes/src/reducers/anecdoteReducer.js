const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0
	}
}

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'VOTE':
			const id = action.data.anecdote.id
			const anecdoteToChange = state.find(a => a.id === id)
			const changedAnecdote = {
				...anecdoteToChange,
				votes: anecdoteToChange.votes + 1
			}
			const newState = state.map(a => a.id !== id ? a : changedAnecdote)
			return newState.sort((a, b) => (b.votes - a.votes))
		case 'ADD':
			return [...state, action.data]
		case 'INIT':
			return action.data
		default:
			return state
	}
}

export const initializeAnecdotes = (anecdotes) => {
	return {
		type: 'INIT',
		data: anecdotes,
	}
}

export const createAnecdote = (data) => {
	return {
		type: 'ADD',
		data,
	}
}

export const voteAnecdote = (anecdote) => {
	return {
		type: 'VOTE',
		data: {
			anecdote: anecdote.content
		}
	}
}

export default reducer