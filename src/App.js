import "./App.css";
import "./custom/css/custom.css";
import SignIn from "./signIn";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./signUp";
function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
