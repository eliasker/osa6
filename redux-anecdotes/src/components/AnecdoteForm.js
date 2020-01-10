import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {
	const addAnecdote = (event) => {
		event.preventDefault()
		const anecdote = event.target.anecdote.value
		store.dispatch(createAnecdote(anecdote))
		showNotification(`created: ${anecdote}`, store)
		event.target.anecdote.value = ''
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div><input name="anecdote" /></div>
				<button type="submit">create</button>
			</form>
		</div>
	)
}

export default AnecdoteForm