const notificationReducer = (state = null, action) => {
	//console.log('action', action)
	switch (action.type) {
		case 'NEW_NOTIFICATION':
			return action.text
		case 'REMOVE':
			return null
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
	}
	*/
}

export default notificationReducer