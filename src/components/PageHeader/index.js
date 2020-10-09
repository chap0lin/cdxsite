import React from 'react'
import './styles.css'
import {FiMenu} from 'react-icons/fi'

import logo from '../../assets/img/Logo-Blue.png'

export default function PageHeader(){
    return(
            <div className="page-header">
                <div className="logo-container">
                    <img src={logo} alt="cdx logo"/>
                </div>
                <div className="top-list-container">
                    <h2>SERVIÇOS</h2>
                    <h2>A EMPRESA</h2>
                    <h2>CONTATO</h2>
                    <FiMenu className="button-menu" size={40} color="#0C1832" />
                </div>
            </div>
    )
}