import UserAction from './UserAction.types';

const SetCurrentUser = (user) =>({
	type : UserAction.SET_CURRENT_USER,
	payload : user
})

export default SetCurrentUser;