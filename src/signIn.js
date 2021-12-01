import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="container">
      <div className="card shadow p-8 mb-9 bg-body rounded">
        <div className="card-body">
          <div className="col-md-12 row">
            <div className="col-md-6 left-bg text-white">
              <h1 className="mt-4">Welcome Back!</h1>
              <div className="justify-content-center msg-custom">
                <span>
                  To keep connected with us please Signup with your personal
                  info
                </span>
              </div>
              <a href="/">
                <button className="round-btn">SIGN UP</button>
              </a>
            </div>
            <div className="col-md-6 right-bg">
              <h1>Login account</h1>
              <div className="mediaBtn">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="custom-icons">
                    <FaFacebook />
                  </i>
                </a>
                <a
                  href="https://myaccount.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="custom-icons">
                    <FaGooglePlusG />
                  </i>
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="custom-icons">
                    <FaLinkedinIn />
                  </i>
                </a>
              </div>

              <form>
                <p>Please use your email to login</p>
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
                    SIGN IN
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

export default SignIn;
