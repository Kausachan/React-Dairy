import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.styles.scss';
import {withRouter} from 'react-router-dom';

const handleDayClick = (val, history) =>{
  const val_list = String(val).split(' ')
  const collectionName = val_list[1] + val_list[3]
  const documentName = val_list[0] + val_list[2]
  history.push(`month/${collectionName}/${documentName}`)

}

const CalenderBoard = ({history}) => {
	return (
    <div className = "Calender-box">
			<Calendar className = "Calender-animate" onClickDay = {(val) => handleDayClick(val, history)}/>
    </div>
		)
}

export default withRouter(CalenderBoard);