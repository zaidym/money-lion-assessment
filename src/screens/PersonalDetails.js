import React, { useState, useEffect } from 'react'
import "../styles/Form.css"
import { Button } from '../components/Button'
import FormInput from '../components/FormInput';
import { useNavigate } from "react-router-dom";
import { personalDetailsForm } from '../data/persoanlDetailsForm';
import { useSelector, useDispatch } from 'react-redux';
import { storeProfileInfo } from '../actions'


function PersonalDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const formData = useSelector(state => state.form)

    const personalInfo = ("profileInfo" in formData)

    useEffect(() => {
        if (personalInfo) {
            navigate('/onboard-test.moneylion.com/dob')
        }
    })

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeProfileInfo(values))
        navigate(`/onboard-test.moneylion.com/dob`)
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className='main-container'>
            <form className='container' onSubmit={handleSubmit}>
                <h1>Create Your Account</h1>
                {personalDetailsForm.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <Button>Submit</Button>
            </form>
        </div>
    )
}

export default PersonalDetails