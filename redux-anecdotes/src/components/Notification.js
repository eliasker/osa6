import React from 'react'
import { connect } from 'react-redux'
import './notification.css'

const Notification = (props) => {
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1
	}
	let notification = props.notification
	console.log(notification.type)
	return (
		<div>
			<div className={notification.type} style={style}>
				{notification.text}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		notification: state.notifications
	}
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification
