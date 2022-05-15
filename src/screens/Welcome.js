import React, { useEffect } from 'react'
import "../styles/Welcome.css"
import imageHome from '../assets/images/home.png'
import { Button } from '../components/Button'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Welcome() {

  const formData = useSelector(state => state.form)
  const navigate = useNavigate()

  // Checking in persistant state whether the user has filled in the persoanl details or dob 
  useEffect(() => {
    if ("profileInfo" in formData && "dob" in formData) {
      navigate('/onboard-test.moneylion.com/agreement')
    }  else if ("profileInfo" in formData) {
      navigate('/onboard-test.moneylion.com/dob')
    }
  }, []);


  return (
    <div className='root-container'>
      <div className='box-container'>
        <div className='left-container'>
          <h1 className='heading fontStyle'>Banking that <br /> gives you more</h1>
          <p className='sub-heading'>
            A lot more. Like your paycheck up to two days early<sup>1</sup> with
            RoarMoney℠ — <br /> plus easy ways to borrow, save, invest, and
            earn. All in one app.
          </p>
          <Link to="/onboard-test.moneylion.com/personalDetails">
            <Button>Get Started</Button>
          </Link>
          <p className='bottom-text'>
            By using this website you agree to our
            <a href='https//www.moneylion.com'> Terms and Conditions </a>
            and <a href='https//www.moneylion.com'> Privacy Policy </a> <br />
            MoneyLion is a financial technology  company, not a bank. RoarMoney℠ <br />
            is powered by MetaBank®, N.A., Member FDIC.
          </p>
        </div>
        <div className='image-container'>
          <img
            src={imageHome}
            width="600"
            height="600"
            alt='main'
            className='image-align'
          />
        </div>
      </div>
    </div>
  )
}

export default Welcome