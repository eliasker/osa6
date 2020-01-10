import React from 'react'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
	const anecdotes = store.getState().anecdotes
	const anecdotesToShow = () => {
		return anecdotes.filter(a => a.content.toLowerCase().includes(store.getState().filter))
	}
	const vote = (id, anecdote) => {
		store.dispatch({ type: 'LIKE', data: { id } })
		showNotification(`you voted: ${anecdote.content}`, store)
	}
	return (
		<div>
			{anecdotesToShow().map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AnecdoteList