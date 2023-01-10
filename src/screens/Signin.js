import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

const Signin = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pword, setPword] = useState();
  const [cnfPword, setCnfPword] = useState();
  const [flagC, setFlagC] = useState(false);
  const [flag, setFlag] = useState(false);
  
  const submitHandler = (e) =>{
    e.preventDefault();
    if(!name || !pword){
      setFlagC(true)
    }else if(pword !== cnfPword){
      setFlag(true)
    }else{
      let users = []; const user ={Name:name, Email:email, Password : pword }
      users.push(user)
      localStorage.setItem("Users",JSON.stringify(users))
    }
  };

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
            <form onSubmit={submitHandler}>
              {
                flagC && (
                  <Alert color="primary" variant="danger">
                    Please Fill The Credentials
                  </Alert>
                )
              }
            <div className="mb-3">
                    <label htmlFor="exampleInput" className="form-label" value={name} onChange={(e) => setName(e.target.value)}>Username</label>
                    <input type="text" className="form-control" id="exampleInput"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" value={email} onChange={(e) => setEmail(e.target.value)}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" value={pword} onChange={(e) => setPword(e.target.value)}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" value={cnfPword} onChange={(e) => setCnfPword(e.target.value)}>Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-outlinr-primary w-100" >Register</button>
            </form>
              {
                flag && (
                  <Alert color="primary" variant="danger">
                    Password Do Not Match
                  </Alert>
                )
              }
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin