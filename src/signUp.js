import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="col-md-12 row">
            <div className="col-md-6 left-bg text-white">
              <h1 className="mt-4">Welcome Back!</h1>
              <div className="justify-content-center msg-custom">
                <span>
                  To keep connected with us please login with your personal info
                </span>
              </div>
              <a href="/">
                <button className="round-btn">SIGN IN</button>
              </a>
            </div>
            <div className="col-md-6 right-bg">
              <h1>Create account</h1>
              <div className="mediaBtn">
                <span className="custom-icons">
                  <FaFacebook />
                </span>
                <span className="custom-icons">
                  <FaGooglePlusG />
                </span>
                <span className="custom-icons">
                  <FaLinkedinIn />
                </span>
              </div>

              <form>
                <p>or use your email for registration</p>
                <div className="input-group">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      name="password"
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
