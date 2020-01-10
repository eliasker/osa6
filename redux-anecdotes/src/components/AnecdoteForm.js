import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const addAnecdote = async (event) => {
		event.preventDefault()
		const anecdote = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.createAnecdote(anecdote)
		props.showNotification(`created: ${anecdote}`, 4)
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
	createAnecdote,
	showNotification
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

export default connect(null, { createAnecdote } )(ConnectedNewAnecdote)