import React from 'react'
import { connect } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
	const anecdotes = props.anecdotes
	const anecdotesToShow = () => {
		return anecdotes.filter(a => a.content.toLowerCase().includes(props.filter))
	}
	const vote = (anecdote) => {
		props.voteAnecdote(anecdote)
		props.showNotification(`you voted: ${anecdote.content}`)
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
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter
	}
}

const mapDispatchToProps = {
	showNotification,
	voteAnecdote
}

const ConnectedAnecdotes = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdotes