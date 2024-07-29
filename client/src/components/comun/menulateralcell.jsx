import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import facebook from '../../assets/iconos/menu/facebook.png'
import instagram from '../../assets/iconos/menu/instagram.png'
import twitter from '../../assets/iconos/menu/twitter.png'
import linkedin from '../../assets/iconos/menu/linkedin.png'
import tiktok from '../../assets/iconos/menu/tiktok.png'

import {set_open_menu_main} from '../../redux/actions/data.js'

export default function MenuLateralCell({proporcional}) {

    const dispatch = useDispatch()

    const [seleccion_menu, setSeleccionMenu] = useState('inicio')

    return (
        <div className='position-fixed start-0 shadow' style={{width: '100%', height: '100%', background: 'rgba(89, 89, 89, 0.5)', top: 200 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: '100%'}}>
                <div style={{width: '40%', height: '100%'}}/>
                <div style={{width: '60%', height: '100%', background: 'rgba(192, 225, 215, 0.6)'}}>
                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'inicio' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: '#20294e', 
                            fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                            onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                            <a href='/#' style={{textDecoration: 'none', color: '#20294e'}}
                                onClick={() => dispatch(set_open_menu_main(false))}>Inicio</a>
                        </p>
                    </div>
                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'nosotros' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: '#20294e', 
                            fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                            onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                            <a href='/#nosotros' style={{textDecoration: 'none', color: '#20294e'}}
                                onClick={() => dispatch(set_open_menu_main(false))}>Nosotros</a>
                        </p>
                    </div>
                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'clientes' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: '#20294e', 
                            fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                            onMouseOver={() => setSeleccionMenu('clientes')} onMouseLeave={() => setSeleccionMenu('')}>
                            <a href='/#clientes' style={{textDecoration: 'none', color: '#20294e'}}
                                onClick={() => dispatch(set_open_menu_main(false))}>Clientes</a>
                        </p>
                    </div>
                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'productos' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: '#20294e', 
                            fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                            onMouseOver={() => setSeleccionMenu('productos')} onMouseLeave={() => setSeleccionMenu('')}>
                            <a href='/#productos' style={{textDecoration: 'none', color: '#20294e'}}
                                onClick={() => dispatch(set_open_menu_main(false))}>Productos</a>
                        </p>
                    </div>
                    <div style={{width: '100%', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 40 / proporcional, paddingLeft: 40 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'contacto' ? 700 : 600, lineHeight: `${40 / proporcional}px`, color: '#20294e', 
                            fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'right'}}
                            onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                            <a href='/#contacto' style={{textDecoration: 'none', color: '#20294e'}}
                                onClick={() => dispatch(set_open_menu_main(false))}>Contácto</a>
                        </p>
                    </div>
                    <div className='rounded-pill' style={{width: '90%', height: 2 / proporcional, background: '#20294e', marginLeft: '5%',  marginRight: '5%', marginBottom: 20 / proporcional}}/>
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 40 / proporcional, paddingRight: 40 / proporcional}}>
                        <a href='https://www.facebook.com' target='_blank' style={{width: 'auto', height: 'auto', marginRight: 10 / proporcional}}>
                            <img src={facebook} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 5 / proporcional}}
                                onClick={() => dispatch(set_open_menu_main(false))}/>
                        </a>
                        <a href='https://www.instagram.com' target='_blank' style={{width: 'auto', height: 'auto', marginRight: 10 / proporcional}}>
                            <img src={instagram} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 5 / proporcional}}
                                onClick={() => dispatch(set_open_menu_main(false))}/>
                        </a>
                        <a href='https://www.linkedin.com' target='_blank' style={{width: 'auto', height: 'auto', marginRight: 10 / proporcional}}>
                            <img src={linkedin} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 5 / proporcional}}
                                onClick={() => dispatch(set_open_menu_main(false))}/>
                        </a>
                        <a href='https://www.tiktok.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={tiktok} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 5 / proporcional}}
                                onClick={() => dispatch(set_open_menu_main(false))}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
