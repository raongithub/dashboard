import React from 'react'
import "./Signup.css"
import Sideimg from './sideimg.png'
import { Link } from 'react-router-dom'

export default function login() {
	return (
		<div>
			<div className='row g-0'>
				<div className='col-md-6 g-0'>
					<div className='leftside'>
						<div className='text-center signup-box'>
							<form className='form-container'>
								<div className='mt-3'>
									<input type="text" className='form-control register-text-box' placeholder='First Name' />
								</div>
								<div className='mt-3'>
									<input type="text" className='form-control register-text-box' placeholder='Last Name' />
								</div>
								<div className='mt-3'>
									<input type="text" className='form-control register-text-box' placeholder='Phone Number' />
								</div>
								<div className='mt-3'>
									<input type="text" className='form-control register-text-box' placeholder='Email' />
								</div>

								<div className="mt-3 mb-3 row">
									<div className='col-sm-2'>
										<label className="col-sm-2 field-label">Gender</label>
									</div>
									<div className="col-sm-10 radio-buttons">
										<input className="form-check-input" name="gender" type="radio" value="male" defaultChecked />
										<label className="form-check-label">
											M
										</label>
										<input className="form-check-input" name="gender" type="radio" value="female" />
										<label className="form-check-label">
											F
										</label>
									</div>
								</div>

								<div className="col-auto">
									<Link to="/dashboard" className="btn btn-primary col-5 btn-submit">Sign up</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='col-md-6 g-0'>
					<div className='rightside container d-flex align-items-center justify-content-center'>
						<img src={Sideimg} alt="Side" />
					</div>
				</div>
			</div>
		</div>
	)
}
