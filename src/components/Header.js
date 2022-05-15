import React from 'react'
import logo from '../assets/images/money-lion-logo.png'
import '../styles/Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearStore } from '../actions'
import { useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearStore())
    navigate('/')
  }

  return (
    <div className='header-container'>
        <img
        src={logo}
        alt="logo"
        width="400"
        height="100"
        className='image-align'
        onClick={() => clear()}
        >
        </img>
    </div>
  )
}

export default Header