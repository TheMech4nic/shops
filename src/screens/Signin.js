import React from 'react'

const Signin = () => {
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outlinr-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signinModal"
      ><span className="fa fa-user-plus me-1"></span>
        Sign In
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signinModal"
        tabIndex="-1"
        aria-labelledby="signinModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="signinModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <button className="btn btn-outlinr-primary w-100 mb-2">
                <span className="fa fa-google me-2"></span>Sign Up with Google
            </button>
            <button className="btn btn-outlinr-primary w-100 mb-2">
                <span className="fa fa-facebook me-2"></span>Sign Up with facebook
            </button>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInput" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInput"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-outlinr-primary w-100">Register</button>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin