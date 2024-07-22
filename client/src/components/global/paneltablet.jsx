import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import whatsapp from '../../assets/iconos/redes/whatsapp.png'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import { useDispatch, useSelector } from 'react-redux'

export default function GlobalPanel({proporcional}) {

    const dispatch = useDispatch()

    const [boton_whatsapp, setBotonWhatsapp] = useState(false)

    const [seleccion_menu, setSeleccionMenu] = useState('inicio')

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)
    console.log ('panel', open_menu_main)

    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <div className='position-fixed top-0 start-0' style={{width: '100%', height: 'auto', background: 'transparent'}}>
                <MenuSuperiorTablet proporcional={proporcional}/>
                {
                    open_menu_main ? (
                        <div className='position-fixed start-0 shadow' style={{width: '100%', height: '100%', background: 'rgba(89, 89, 89, 0.5)', top: 120 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: '100%'}}>
                                <div style={{width: '40%', height: '100%'}}/>
                                <div style={{width: '60%', height: '100%', background: 'rgba(255, 255, 255, 0.6)'}}>
                                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'inicio' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: 'rgb(89, 89, 89)', 
                                            fontFamily: 'Montserrat',
                                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                                            onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                            <a href='/#' style={{textDecoration: 'none', color: 'rgb(89, 89, 89)'}}>Inicio</a>
                                        </p>
                                    </div>
                                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'nosotros' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: 'rgb(89, 89, 89)', 
                                            fontFamily: 'Montserrat',
                                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                                            onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                            <a href='/#nosotros' style={{textDecoration: 'none', color: 'rgb(89, 89, 89)'}}>Sobre nosotros</a>
                                        </p>
                                    </div>
                                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'clientes' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: 'rgb(89, 89, 89)', 
                                            fontFamily: 'Montserrat',
                                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                                            onMouseOver={() => setSeleccionMenu('clientes')} onMouseLeave={() => setSeleccionMenu('')}>
                                            <a href='/#clientes' style={{textDecoration: 'none', color: 'rgb(89, 89, 89)'}}>Nuestros clientes</a>
                                        </p>
                                    </div>
                                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'productos' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: 'rgb(89, 89, 89)', 
                                            fontFamily: 'Montserrat',
                                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                                            onMouseOver={() => setSeleccionMenu('productos')} onMouseLeave={() => setSeleccionMenu('')}>
                                            <a href='/#productos' style={{textDecoration: 'none', color: 'rgb(89, 89, 89)'}}>Nuestros productos</a>
                                        </p>
                                    </div>
                                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'contacto' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: 'rgb(89, 89, 89)', 
                                            fontFamily: 'Montserrat',
                                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                                            onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                            <a href='/#contacto' style={{textDecoration: 'none', color: 'rgb(89, 89, 89)'}}>Contácto</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <Outlet/>
            <div className={boton_whatsapp ? 'position-fixed shadow-lg rounded-circle' : 'position-fixed shadow rounded-circle'} 
                style={{width: 96 / proporcional, height: 96 / proporcional, bottom: 64 / proporcional, right: 64 / proporcional, 
                    zIndex: 99999}} onMouseOver={() => setBotonWhatsapp(true)} onMouseLeave={() => setBotonWhatsapp(false)}>
                <img src={whatsapp} style={{width: 96 / proporcional, height: 96 / proporcional, cursor: 'pointer', padding: 16 / proporcional}}/>
            </div>
        </div>
    )
}
