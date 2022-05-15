import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/Button";
import Snackbar from "../components/Snackbar";
import "../styles/Agreement.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearStore } from '../actions/index'
import config from "../config/config";

function Agreement(props) {

    const [agreement1, setAgreement1] = useState(false);
    const [agreement2, setAgreement2] = useState(false);

    const [success, setSuccess] = useState(false)   // Used to load components dynamically

    const [message, setMessage] = useState('')
    const [snackbarType, setSnackbarType] = useState('')

    const snackbarRef = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formData = useSelector(state => state.form)

    const dobInfo = ("dob" in formData)

    useEffect(() => {
        if (!dobInfo) {
            navigate('/')
        }
    }, [])

    const snackbarControl = (message, type) => {
        setMessage(message)
        setSnackbarType(type)
        snackbarRef.current.show()
    }

    const submitData = async () => {
        if (agreement1 && agreement2) {
            let userData = {
                firstName: formData.profileInfo.firstName,  
                lastName: formData.profileInfo.lastName,
                email: formData.profileInfo.email,
                agreement1: agreement1,
                agreement2: agreement2
            }

            let url = config.url

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                dispatch(clearStore())  // clearing the store after data is successfully submitted
                snackbarControl('Success', 'success')
                setSuccess(true)
            } catch (error) {
                snackbarControl(error.message, 'error')
            }

        } else {
            snackbarControl('Please agree to the following', 'error')
        }
    }


    const AgreementComponent = () => {
        return (
            <div className="container">
                <h1>One Last Step</h1>
                <div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            checked={agreement1}
                            onChange={() => setAgreement1(!agreement1)}
                            className="checkbox-input"
                        />
                        <label className="form-label">I agree to the</label>
                    </div>
                    <p className="agreement-label">
                        {" "}
                        Electronic Transaction E-sign Consent{" "}
                    </p>
                </div>
                <div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            checked={agreement2}
                            onChange={() => setAgreement2(!agreement2)}
                            className="checkbox-input"
                        />
                        <label className="form-label">
                            I agree to the following agreements
                        </label>
                    </div>
                    <p className="agreement-label">
                        Privacy notice <br /> Terms and conditions <br /> Membership
                        agreement
                    </p>
                </div>
                <Button onClick={submitData}>Agree and Create Account</Button>
            </div>
        )
    }

    const SuccessComponent = () => {
        return (
            <div className="container">
                <h2>
                    You have successfully submitted the data.
                </h2>
                <Link to="/">
                    <Button>Go to Home</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="main-container" >
            {
                !success ? <AgreementComponent /> : <SuccessComponent />
            }
            <Snackbar
                ref={snackbarRef}
                message={message}
                type={snackbarType}
            >
            </Snackbar>
        </div>
    );
}

export default Agreement
