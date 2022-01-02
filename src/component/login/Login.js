import React from 'react'
import "./Login.css"
import Sideimg from './sideimg.png'
import { Link } from 'react-router-dom'

export default function login() {
	return (
		<div>
			<div className='row g-0'>
				<div className='col-md-6 g-0'>
					<div className='leftside container d-flex align-items-center justify-content-center'>
						<img src={Sideimg} alt="Side" />
					</div>
				</div>
				<div className='col-md-6 g-0'>
					<div className='rightside'>
						<div className='text-center login-box'>
							<form className='form-container'>
								<div className='mt-4'>
									<input type="email" className='form-control' />
								</div>
								<div className='mt-4'>
									<input type="Password" className='form-control' />
								</div>
								<div className='row  mt-5'>
									<div className='col'>
										<Link to="/dashboard">Login</Link>
									</div>
									<div className='col'>
										<p>OR</p>
									</div>
									<div className='col'>
										<Link to="/signup">Signup</Link>
									</div>
								</div>
								<div className='social-container'>
									<div className='row'>
										<div className='col'>
											<Link to="#" className="social"><i className="fab fa-google"></i></Link>
										</div>
										<div className='col'>
											<Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
										</div>
										<div className='col'>
											<Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
