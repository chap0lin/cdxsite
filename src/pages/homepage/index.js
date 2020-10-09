import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'

import heroImg from '../../assets/img/hero_img.jpg'
export default function Homepage(){
    return(
        <div className="page-homepage">
            <PageHeader />
            <main>
                <div className="hero-text-container">
                    <h1>SOLUÇÕES EM AUTOMAÇÃO</h1>
                    <h3>Soluções e Consultoria em Automação Residencial, Predial e Internet das coisas.</h3>
                    <button>
                        FAÇA SEU ORÇAMENTO
                    </button>
                </div>
                <div className="first-triangle"></div>
                <div className="hero-container">
                    <div className="hero-fog"></div>
                    <img src={heroImg} alt="Hero"/>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}