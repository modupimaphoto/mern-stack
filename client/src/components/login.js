import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import illustration_sign_up_desktop from "../assets/images/illustration_sign_up_desktop.svg"
import illustration_sign_up_mobile from "../assets/images/illustration_sign_up_mobile.svg"

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (event) => {
		event.preventDefault();
		
		if(email.trim() === '' || password.trim() === ''){
			
		}else{
			const url = "http://localhost:5000/api/user";
			axios.post(url, { email, password })
			.then(() => {
				console.log("posted");
			})
			.catch((error) => {
				console.log(error);
			})
		}
	}
	
	return(
		<>
			<div className="wrapper">
				<div className="card-wrapper">
					<div className="d-block d-md-flex">
						<div className="d-block d-md-none">
							<img src={ illustration_sign_up_mobile } alt="illustration sign up mobile" className="w-100"/>
						</div>
						<div className="p-3 p-md-4 w-100">
							<h1 className="text-uppercase text-center">Login</h1>
							<form onSubmit={ handleSubmit }>
								<div className="form-group w-100 mb-3 mb-md-0">
									<label for="email">Email</label>
									<input type="email" className="form-control" 
										onChange={ (e) => setEmail(e.target.value) }
									/>
								</div>
								<div className="form-group w-100 mb-3 mb-md-0">
									<label for="password">Password</label>
									<input type="password" className="form-control"
										onChange={ (e) => setPassword(e.target.value) }
									/>
								</div>
								<div className="form-group w-100">
									<input type="submit" value="Login" className="btn custom-btn" />
								</div>
							</form>
							<p className="text-center">
								Create account. <Link to="/signup">Signup</Link>
							</p>
						</div>
						<div className="d-none d-md-block">
							<img src={ illustration_sign_up_desktop } alt="illustration sign up desktop" className="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;