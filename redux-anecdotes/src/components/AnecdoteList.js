import React from 'react'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
	const anecdotes = store.getState().anecdotes
	const vote = (id, anecdote) => {
		store.dispatch({ type: 'like', data: { id } })
		showNotification(`you voted: ${anecdote.content}`, store)
	}
	return (
		<div>
			{anecdotes.map(anecdote =>
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