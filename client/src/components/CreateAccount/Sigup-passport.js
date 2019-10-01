import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div>
		<h4>Sign Up</h4>
		<form className="login-form">
			<div className="login-fields">
				<input className=""
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
			</div>
			<div className="login-fields">
				<input className=""
					placeholder="password"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
			</div>
			<div className="login-btn">
				<button
					className="btn btn-primary"
					onClick={this.handleSubmit}
					type="submit"
				>Sign Up</button>
			</div>
		</form>
	</div>

	)
}
}

export default Signup
