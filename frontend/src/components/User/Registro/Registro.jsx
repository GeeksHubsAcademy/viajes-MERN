import React from 'react';
import '../User.scss';
class Registro extends React.Component {
    render() {
        console.log(this.props);
        
        return (
            <div className="bgregister">
                <form className="register" method="POST" action="user/signup" >
                    {/* <input type="text" name="name" className="name" placeholder="Introduce your name" /> */}
                    <input type="text" name="usuario" className="lastname" placeholder="Introduce your usuario" />
                    <input type="email" name="email" className="email" placeholder="Introduce your email*" required />
                    <input type="password" name="password" className="password" placeholder="Enter your password*"
                     minLength="8" required />
                    <label className="passwordRule">Password must contain at least 8 characters.</label>
                    <input type="password" name="passwordConfirm" className="passwordConfirm" placeholder="Confirm your password*"
                        required  />
                    <label className="passwordRule2">Both password should match.</label><label className="terms">
                        <input type="checkbox" required /> By clicking on Sign up, you agree to David
                        Travel Agency's Terms and Conditions of Use.*
                <span className="checkmark"></span></label>
                    <button type="submit" className="submit" value="Submit"> SIGN UP</button>
                </form>
            </div >
        )
    }
}
export default Registro;