import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [name, setName] = useState();
  const [pword, setPword] = useState();
  const [flagC, setFlagC] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!name || !pword){
      setFlagC(true)
    }

  };

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
            <form onSubmit={submitHandler}>
              {
                flagC && (
                  <Alert color="primary" variant="danger">
                    Please Fill The Credentials
                  </Alert>
                )
              }
                <div className="mb-3">
                    <label htmlFor="exampleInput" className="form-label" value={name} onChange={(e) => setName(e.target.value)} >User Name</label>
                    <input type="text" className="form-control" id="exampleInput"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" value={pword} onChange={(e) => setPword(e.target.value)}>Password</label>
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
