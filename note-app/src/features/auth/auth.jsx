import "./auth.css"
import Photo from "../../assets/images/LoginPhoto.jpg"


function Login() {
  return (
    <>
    <div className = "LoginContainer">
      <div className ="Left">
        <div className = "LoginBox">
          <form className = "forms">
          <h1>Login</h1>
          <p>Username:</p>
          <input type="text" placeholder="Username" />
          <p>Password:</p>
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>
        </div>
      </div>
      <div className="Right">
        <div className = "PhotoContainer">
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;