const notificationReducer = (state = null, action) => {
	console.log('notification state now:', state)
	console.log('action', action)
	switch (action.type) {
		case 'new_notification':
			return action.text
		case 'remove':
			return null
		default:
			return state
	}

}

export const showNotification = (text, store) => {
	console.log('show notification: ', text)
		store.dispatch({
			type: 'new_notification',
			text: text
		})
		setTimeout(() => {
			store.dispatch({ type: 'remove' })
		}, 4000)
}

export default notificationReducer