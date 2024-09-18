import React, { useState } from 'react'

import logo from '../../assets/logo/logo_menu_superior.png'

export default function MenuSuperior({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('inicio')

    return (
        <div className='' style={{width: '100%', height: 120 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional,
                background: 'rgba(192, 225, 215, 0.8)'
        }}>
            <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='d-flex jusfity-content-between' style={{width: '100%', height: 80 / proporcional}}>
                    <div style={{width: '30%', height: 80 / proporcional}}>
                        <a href='/#' style={{width: 'auto', height: 'auto', textDecoration: 'none'}}>
                            <img src={logo} style={{width: 354 / proporcional, height: 80 / proporcional}}/>
                        </a>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '70%', height: 80 / proporcional}}>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'inicio' ? 700 : 600, lineHeight: `${40 / proporcional}px`, 
                                color: '#20294e', fontFamily: 'Mont',
                                marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/#' style={{textDecoration: 'none', color: '#20294e'}}>Inicio</a>
                            </p>
                        </div>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'nosotros' ? 700 : 600, lineHeight: `${40 / proporcional}px`, 
                                color: '#20294e', fontFamily: 'Mont',
                                marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/#nosotros' style={{textDecoration: 'none', color: '#20294e'}}>Nosotros</a>
                            </p>
                        </div>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'clientes' ? 700 : 600, lineHeight: `${40 / proporcional}px`, 
                                color: '#20294e', fontFamily: 'Mont',
                                marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('clientes')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/#clientes' style={{textDecoration: 'none', color: '#20294e'}}>Clientes</a>
                            </p>
                        </div>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'productos' ? 700 : 600, lineHeight: `${40 / proporcional}px`, 
                                color: '#20294e', fontFamily: 'Mont',
                                marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('productos')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/#productos' style={{textDecoration: 'none', color: '#20294e'}}>Productos</a>
                            </p>
                        </div>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'contacto' ? 700 : 600, lineHeight: `${40 / proporcional}px`, 
                                color: '#20294e', fontFamily: 'Mont',
                                marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/#contacto' style={{textDecoration: 'none', color: '#20294e'}}>Contacto</a>
                            </p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
