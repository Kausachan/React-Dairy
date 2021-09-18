import {React} from 'react';
import {Route} from 'react-router-dom';
import DisplayDay from '../display-day/DisplayDay.component';

const TaskList = ({match}) =>{
	return(
			<Route path = {`${match.url}/:id`} component = {DisplayDay}/>
		)
}


export default TaskList;