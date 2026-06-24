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
          <input type="text" placeholder="Username" required/>
          <p>Password:</p>
          <input type="password" placeholder="Password" required/>

          <button type="submit">Login</button>
        </form>
        <p className = "CreateAcc"><a href="#">Don't have an account?</a></p>
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