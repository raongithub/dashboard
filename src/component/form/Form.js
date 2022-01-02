import React from 'react'
import "./Form.css"
export default function Form() {
	return (
		<>
			<div className='container form-containers'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='image-contain'>
							<img className='profile-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="profile" />
							<div className='image-upload-button'>
								<label className='upload-label' htmlFor="file">Edit Photo</label><br />
								<input className='upload-button-restructure' name="file" id="file" type="file" />
							</div>
						</div>
						<div className="mb-3 row mt-5">
							<label className="col-sm-2 col-form-label">Name :</label>
							<div className="col-sm-10">
								<input type="text" className="form-control profile-field" />
							</div>
						</div>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">Phone :</label>
							<div className="col-sm-10">
								<input type="text" className="form-control profile-field" />
							</div>
						</div>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">Email :</label>
							<div className="col-sm-10">
								<input type="email" className="form-control profile-field" />
							</div>
						</div>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">Gender :</label>
							<div className="col-sm-10">
								<input type="text" className="form-control profile-field" />
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">Address :</label>
							<div className="col-sm-10">
								<textarea className="form-control profile-field" ></textarea>
							</div>
						</div>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">City :</label>
							<div className="col-sm-10">
								<input type="text" className="form-control profile-field" />
							</div>
						</div>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">State :</label>
							<div className="col-sm-10">
								<input type="text" className="form-control profile-field" />
							</div>
						</div>
						<div className="mb-3 row mt-2">
							<label className="col-sm-2 col-form-label">Country :</label>
							<div className="col-sm-10">
								<input type="text" className="form-control profile-field" />
							</div>
						</div>
					</div>
					<div className='d-flex dashboard-button-section'>
						<button className="col-md-3 profile-btn-process">Update & Save</button>
					</div>
				</div>
			</div>
		</>
	)
}
