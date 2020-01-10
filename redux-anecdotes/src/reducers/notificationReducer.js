const initialState = { type: 'visible', text: 'this is initial notification' }
const notificationReducer = (state = initialState, action) => {
	console.log('action', action)
	switch (action.type) {
		case 'NEW_NOTIFICATION':
			return { type: 'visible', text: action.text }
		case 'REMOVE':
			return { ...state, type: 'invisible' }
		default:
			return state
	}

}

export const showNotification = (text) => {
	return {
		type: 'NEW_NOTIFICATION',
		text: text
	}
	/*
	return dispatch => {
		dispatch({
			type: 'NEW_NOTIFICATION',
			text: text
		})
		setTimeout(() => dispatch({
			type: 'REMOVE'
		}), 4000)
		console.log('settimeout ')
	}
	*/
}

export default notificationReducer