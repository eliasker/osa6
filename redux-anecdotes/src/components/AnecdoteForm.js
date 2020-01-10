import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const addAnecdote = (event) => {
		event.preventDefault()
		const anecdote = event.target.anecdote.value
		props.createAnecdote(anecdote)
		showNotification(`created: ${anecdote}`)
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

const mapDispatchToProps = {
	createAnecdote
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter
	}
}

const ConnectedNewAnecdote = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteForm)

export default ConnectedNewAnecdote