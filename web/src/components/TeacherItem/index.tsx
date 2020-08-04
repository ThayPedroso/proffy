import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/44008476?s=460&u=7dbb833a401c575edc98f696cb5823d3b5e78e72&v=4" alt="Thayla"/>
                <div>
                    <strong>Thayla Pedroso</strong>
                    <span>Indústria 4.0</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de desenvolvimento de automação de software.
                <br/><br/>
                Apaixonada por desenvolver soluções criativas e inteligentes reunindo TI e TA.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 200,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem