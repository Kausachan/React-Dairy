import React from 'react';
import {firestore} from '../../firebase/firebase.utils';
import './DisplayDay.styles.scss';
import Loader from '../loader/Loader.component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class DisplayDay extends React.Component{
	state = {
		value : '',
		loader : false
	}

	urlList = this.props.match.url.split('/')

	componentDidMount(){
		const func = async (month, day) => {
			const colRef = await firestore.collection(`users/af79695O9FgWWUTPEnKW/${month}`);
			const colCheck = await colRef.get()
			var docRef = await firestore.doc(`users/af79695O9FgWWUTPEnKW/${month}/${day}`)
			var docSnap = await docRef.get();
			if(!docSnap.exists || !colCheck.size)
			{
				try{
					await firestore.doc(`users/af79695O9FgWWUTPEnKW/${month}/${day}`)
				.set({text : ''});
				this.setState({value : '', loader : false})
				}
				catch(err){
					alert("error occured")
				}
				
			}
			else
			{
				try{
					const docData = await docSnap.data();
					this.setState({value : docData.text, loader : false});
				}
				catch(err){
				 	alert(err)
				}
			}
		}
		this.setState({loader : true}, () => func(this.urlList[2], this.urlList[3]))
		
	}	

	handleChange = (e) =>{
		const {value} = e.target
		this.setState({value : value})
	}

	handleSave = (e) =>{
		e.preventDefault();
		const func = async () => {
			try{
				await firestore.doc(`users/af79695O9FgWWUTPEnKW/${this.urlList[2]}/${this.urlList[3]}`).update({text : this.state.value});
				toast("saved successfully")
			}
			catch(err){
				alert("error occured")
			}
		}
		func();
	}

	render(){
		console.log(this.state.pop)
		return(
			<div className = "DisplayDay-box">
			{
				!this.state.loader ?
					<div>
					 	<ToastContainer position="top-right" autoClose={3000}/>
						<form onSubmit = {this.handleSave}>
							<textarea className = "DisplayDay-textarea" value = {this.state.value} onChange = {this.handleChange} style = {{width : "65vw", height : "75vh", fontSize : "25px"}}/>
							<button className = "DisplayDay-button" type = "submit" onClick = {this.handleSave}>save</button>
						</form>
					</div>
				:
				<Loader/>
			}
			</div>
		)
	}
		
}

export default DisplayDay;