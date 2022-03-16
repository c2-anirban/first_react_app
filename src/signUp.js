const SignUp = () => {
  return (
    <div className="container">
      <div className="card shadow p-8 mb-9 bg-body rounded">
        <div className="card-body">
          <div className="col-md-12 row">
            <div className="col-md-6 left-bg text-white coloumn">
              <div>
                <h1 className="mt-4">Welcome Back!</h1>
              </div>
              <div className="justify-content-center msg-custom">
                <span>
                  To keep connected with us please login with your personal info
                </span>
              </div>
              <div>
                <a href="/">
                  <button className="round-btn">SIGN IN</button>
                </a>
              </div>
            </div>
            <div className="col-md-6 right-bg">
              <h1>Create account</h1>
              <form>
                <p>Fill all the details for registration</p>
                <div className="input-group">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      pattern="[a-zA-Z][a-zA-Z ][a-zA-Z ]{3,}"
                      title="Please Enter a valid name"
                      required
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{10}"
                      title="Please Enter a valid number"
                      required
                      placeholder="Phone number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      id="autocomplete"
                      onFocus="geolocate()"
                      type="text"
                      required
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="number"
                      name="zip"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      required
                      placeholder="Zip code"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      name="email"
                      pattern="[^ @]*@[^ @]*"
                      size="30"
                      title="Please provide only a Best Startup Ever corporate e-mail address"
                      required
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      name="password"
                      minlength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      required
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                </div>
                <a href="/">
                  <button className="btn btn-sm btn-danger round-btn mt-2">
                    SIGN UP
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
