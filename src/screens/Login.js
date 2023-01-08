import React from "react";

const Login = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outlinr-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      ><span className="fa fa-sign-in me-1"></span>
        Log In
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="loginModalLabel">
                Log In
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
                <span className="fa fa-google me-2"></span>Sign in with Google
            </button>
            <button className="btn btn-outlinr-primary w-100 mb-2">
                <span className="fa fa-facebook me-2"></span>Sign in with facebook
            </button>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-outlinr-primary w-100">Login</button>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
