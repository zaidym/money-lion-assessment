import React, { useState, useEffect } from 'react'
import "../styles/Form.css"
import { dobForm } from '../data/dobForm'
import { Button } from '../components/Button'
import FormInput from '../components/FormInput';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { storeDobInfo } from '../actions'


function Dob() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const formData = useSelector(state => state.form)

    const personalInfo = ("profileInfo" in formData)
    const dobInfo = ("dob" in formData)

    useEffect(() => {
        if (!personalInfo) {
            navigate("/")
        } else if (dobInfo) {
            navigate("/onboard-test.moneylion.com/agreement")
        }
    }, [])
    
    const [values, setValues] = useState({
        dob: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeDobInfo(values))
        navigate(`/onboard-test.moneylion.com/agreement`)
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className='main-container'>
            <form className='container' onSubmit={handleSubmit}>
                <h1>Whats's your date of birth?</h1>
                {dobForm.map((input) => (
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

export default Dob