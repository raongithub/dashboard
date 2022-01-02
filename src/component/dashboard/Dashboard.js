import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import Form from '../form/Form'

export default function Dashboard() {
	return (
		<div>
			<div className="d-flex" id="wrapper">
				<div className="bg-white" id="sidebar-wrapper">
					<div className="list-group list-group-flush my-3">
						<Link to="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Dashboard</Link>
						<Link to="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Home</Link>
						<div className='bottom-section'>
							<button className='dashboard-btn active-button'>Profile</button><br></br>
							<button className='dashboard-btn'>Setting</button>
						</div>
					</div>
				</div>
				<div id="page-content-wrapper">
					<div className='full-page'>
						<Form />
					</div>
				</div>
			</div>
		</div>
	)
}
