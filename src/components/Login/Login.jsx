import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    //useContext use for get signInUser function
    const {signInUser, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginBtn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        // signIn in firebase
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result => console.log(result.user))
        .catch(error => console.error(error))
    }

    return (
        <div className="hero mt-11">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginBtn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="ml-4 mb-4">New this website? Please <NavLink className="btn btn-secondary" to="/register">Register</NavLink></p>
                    <p onClick={handleGoogleLogin} className="ml-4 mb-4">Login with <button className="btn btn-ghost">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;