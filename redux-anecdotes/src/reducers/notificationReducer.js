const initialState = { text: '' }

const notificationReducer = (state = initialState, action) => {
	console.log('action', action)
	switch (action.type) {
		case 'NEW_NOTIFICATION':
			return { text: action.text }
		case 'REMOVE':
			return { ...initialState }
		default:
			return state
	}
}

export const showNotification = (text, time) => {
	return async dispatch => {
		dispatch({
			type: 'NEW_NOTIFICATION',
			text,
		})
		setTimeout(() => {
			dispatch({
				type: 'REMOVE'
			})
		}, time * 1000)
	}
}

export default notificationReducer