import UserReducer from './user/user.reducer';
import  {combineReducers} from 'redux';


const RootReducer = combineReducers({
	user : UserReducer
})

export default RootReducer;