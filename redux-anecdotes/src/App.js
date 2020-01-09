import React from 'react';

const App = (props) => {
	const anecdotes = props.store.getState()

	const vote = (id) => {
		props.store.dispatch({ type: 'like', data: { id } })
	}

	const createAnecdote = (event) => {
		event.preventDefault()
		const anecdote = event.target.anecdote.value
		props.store.dispatch({
			type: 'add',
			data: {
				anecdote: anecdote
			}
		})
	}

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			)}
			<h2>create new</h2>
			<form onSubmit={createAnecdote}>
				<div><input name="anecdote" /></div>
				<button type="submit">create</button>
			</form>
		</div>
	)
}

export default App