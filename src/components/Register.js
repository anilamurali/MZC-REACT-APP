import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
      <div className="row">

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-2">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label for="" className="form-label">Name</label>
                      <input placeholder="enter name" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"/>
                    <label for="" className="form-label">Roll Number</label>
                    <input placeholder="enter roll number" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <input placeholder="enter address" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Mobile Number</label>
                    <input placeholder="enter mobile number" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">College</label>
                    <input placeholder="enter college name" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Username</label>
                    <input placeholder="enter Username" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input placeholder="enter password" type="password" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-success">Register</button></div>
                  
              </div>
          </div>
      
  </div>
    </div>
  )
}

export default Register