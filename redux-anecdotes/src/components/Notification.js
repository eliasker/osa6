import React from 'react'

const Notification = (props) => {
	console.log('NOTIFICATION PROPS: ', props)
	const notification = props.store.getState().notifications
		//.store.getState().notifications
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1
	}
	return (
		<div>
			{notification === null ?
				<div></div>
				:
				<div style={style}>
					{notification}
				</div>
			}
		</div>
	)
}

export default Notification
