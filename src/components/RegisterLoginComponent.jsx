import { useState } from "react";
import { StyledButton } from "../styledComponents/primaryButton";
import { connect } from "react-redux";
import { logIn } from "../actions";

const RegisterLoginComponent = ({makeLogin}) => {

    // const registerFormErrorsInit = {
    //     firstName_error:"",
    //     lastName_error:"",
    //     registerEmail_error:"",
    //     registerPassword_error:""
    // }
    // const loginFormErrorsInit = {
    const formErrorsInit = {
        loginEmail_error:"",
        loginPassword_error:"",
        firstName_error:"",
        lastName_error:"",
        registerEmail_error:"",
        registerPassword_error:""
    }

    // const loginFormValidInit = {
    //     loginEmail_valid:"",
    //     loginPassword_valid:"",
    // }

    // const registerFormValidInit = {
    const formValidInit = {
        loginEmail_valid:"",
        loginPassword_valid:"",
        firstName_valid:"",
        lastName_valid:"",
        registerEmail_valid:"",
        registerPassword_valid:""
    }

    // const loginFormValuesInit = {
    //     registerEmail:"",
    //     registerPassword:""
    // }

    // const registerFormValuesInit = {
    const formValuesInit = {
        registerEmail:"",
        registerPassword:"",
        firstName:"",
        lastName:"",
        loginEmail:"",
        loginPassword:""
    }
    const [activeSection, setActiveSection] = useState('login');
    // const [loginFormValues, setLoginFormValues] = useState(loginFormValuesInit);
    // const [loginFormValid, setLoginFormValid] = useState(loginFormValidInit);
    // const [loginFormErrors, setLoginFormErrors] = useState(loginFormErrorsInit);
    // const [registerFormErrors, setRegisterFormErrors] = useState(registerFormErrorsInit);
    const [formValues, setFormValues] = useState(formValuesInit);
    const [formErrors, setFormErrors] = useState(formErrorsInit);
    const [formValid, setFormValid] = useState(formValidInit);


    const loginHandler = () => {
        const {loginEmail, loginPassword} = formValues;
        console.log('Email is', loginEmail);
        console.log('Pass is', loginPassword);
        makeLogin({email: loginEmail, password: loginPassword})
    }

    const onChangeHandler = (event) => {
        const fieldName = event.target.id;
        const value = event.target.value;
        validateField(fieldName, value);
        setFormValues({...formValues, [fieldName]:value})
    }

    const validateField = (fieldName, value) => {
        let error = formErrors;
        let valid = formValid;
        switch(fieldName) {
            case 'loginEmail':
                if (value === "") {
                    error.loginEmail_error = "Field required"
                    valid.loginEmail_valid = false
                }
                else if (!(value.match(/^[A-Za-z0-9.]+@[A-Za-z0-9]+(\.com)$/))) {
                    error.loginEmail_error = "Invalid Email Id"
                    valid.loginEmail_valid = false
                }
                else {
                    error.loginEmail_error = ""
                    valid.loginEmail_valid = true
                }
                break;
            
            case "loginPassword": 
                if (value === "") {
                    error.loginPassword_error = "Field required"
                    valid.loginPassword_valid = false
                } else {
                    error.loginPassword_error = ""
                    valid.loginPassword_valid = true
                }
                break;

            case "registerPassword":
                var flag = false
                if (value.length >= 7 && value.length <= 20)
                    if (value.match(/^.*[A-Z]+.*$/))
                        if (value.match(/^.*[a-z]+.*$/))
                            if (value.match(/^.*[0-9]+.*$/))
                                if (value.match(/^.*[!@#$%^&*].*$/))
                                    flag = true
                if (value === "") {
                    error.registerPassword_error = "Field required"
                    valid.registerPassword_valid = false
                }
                else if (!(flag === true)) {
                    error.registerPassword_error = "Invalid Password, it should contain one upper case, one lower case, one number and one character at least."
                    valid.registerPassword_valid = false
                }
                else {
                    error.registerPassword_error = ""
                    valid.registerPassword_valid = true
                }
                break;
            default:
                break;
        }
        setFormErrors(error);
        setFormValid(valid);
        // TODO: Implement login/regiter button disabled
    }
    return (
        <div className="register-login">
            <div className="row mx-0 sectionButtons">
                <div 
                    className={`col-6 d-flex justify-content-center py-2 loginCta ${activeSection==='login' ? 'active top-border-radius-left' : ''}`}
                    id="login"
                    onClick={_ => setActiveSection('login')}>
                    Login
                </div>
                <div 
                    className={`col-6 d-flex justify-content-center py-2 registerCta ${activeSection==='register' ? 'active top-border-radius-right' : ''}`}
                    id="register"
                    onClick={e => setActiveSection('register')}> 
                    Register
                </div>
            </div>
            {activeSection === 'login' &&
                <>
                    <div className="row">
                        <div className="col-12">
                            <div className="p-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="loginEmail" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email" 
                                        onChange={onChangeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="loginPassword" 
                                        placeholder="Password"
                                        onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <StyledButton 
                                primary
                                onClick={loginHandler}
                            >Login</StyledButton>
                        </div>
                    </div>
                </>
            }
            {activeSection === 'register' &&
                <>
                    <div className="row">
                        <div className="col-12">
                            <div className="p-4">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">First Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Last Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <StyledButton primary>Register</StyledButton>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

function mapStateToProps(state) {
    const {loader, userAuth}=state
    return {loader, userAuth}
}

const mapDispatchToProps = dispatch => {
    return {
        makeLogin:(user)=>dispatch(logIn(user)),
        // updateData: (field,value) => dispatch(updateUserData(field,value))
    }
}

// export default RegisterLoginComponent;
export default connect(mapStateToProps, mapDispatchToProps) (RegisterLoginComponent);