import React from 'react'
import './styles.css'
import {FiMenu} from 'react-icons/fi'

import logo from '../../assets/img/Logo-Blue.png'
import heroImg from '../../assets/img/hero_img.jpg'
export default function Homepage(){
    return(
        <div className="page-homepage">
            <header>
                <div>
                    <h2>CONTACT</h2>
                </div>
                <div className="logo-container">
                    <img src={logo} alt="cdx logo"/>
                </div>
                <div>
                    <FiMenu className="button-menu" size={26} />
                </div>
            </header>
            <main>
                <h1>AQUI NÓS FAZEMOS</h1>
                <img src={heroImg} alt="foto de engenharia" className="hero-image"/>
                <h1>ENGENHARIA</h1>
            </main>
            <footer>

            </footer>
        </div>
    )
}