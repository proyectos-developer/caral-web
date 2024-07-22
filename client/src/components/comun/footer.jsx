import React, { useState } from 'react'

import facebook from '../../assets/iconos/redes/facebook.png'
import instagram from '../../assets/iconos/redes/instagram.png'
import twitter from '../../assets/iconos/redes/twitter.png'
import linkedin from '../../assets/iconos/redes/linkedin.png'
import tiktok from '../../assets/iconos/redes/tiktok.png'

import location from '../../assets/iconos/footer/location.png'
import email from '../../assets/iconos/footer/email.png'
import phone from '../../assets/iconos/footer/phone.png'

import logo from '../../assets/logo/logo_footer.png'

export default function Footer({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('')

    return (
        <div className='shadow' style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div style={{width: '24%', height: 'auto', padding: 10 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <img src={logo} style={{width: 250 / proporcional, height: 185 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <a href='https://www.facebook.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={facebook} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 8 / proporcional}}/>
                        </a>
                        <a href='https://www.instagram.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={instagram} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 8 / proporcional}}/>
                        </a>
                        <a href='https://www.twitter.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={twitter} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 8 / proporcional}}/>
                        </a>
                        <a href='https://www.linkedin.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={linkedin} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 8 / proporcional}}/>
                        </a>
                        <a href='https://www.tiktok.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={tiktok} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 8 / proporcional}}/>
                        </a>
                    </div>
                </div>

                <div style={{width: '24%', height: 'auto', padding: 10 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <h4 style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, color: 'white', fontFamily: 'Playfair Display',
                                    marginBottom: 10 / proporcional, cursor: 'default', textAlign: 'left'}}>
                                    Menú
                                </h4>
                                <div className='rounded-pill' style={{width: '50%', height: 4 / proporcional, background: 'white'}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'inicio' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                    onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>Inicio</a>
                                </p>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'nosotros' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                    onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>Nosotros</a>
                                </p>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'productos' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                    onMouseOver={() => setSeleccionMenu('productos')} onMouseLeave={() => setSeleccionMenu('')}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>Productos</a>
                                </p>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'contacto' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                    onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>Contácto</a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: '24%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <h4 style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, color: 'white', fontFamily: 'Playfair Display',
                                marginBottom: 10 / proporcional, cursor: 'default', textAlign: 'left'}}>
                                Productos
                            </h4>
                            <div className='rounded-pill' style={{width: '15%', height: 4 / proporcional, background: 'white'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'productos-personales' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('productos-personales')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: 'white'}}>Personas naturales</a>
                            </p>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'productos-negocios' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('productos-negocios')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: 'white'}}>Negocios / empresas</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style={{width: '24%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <h4 style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, color: 'white', fontFamily: 'Playfair Display',
                                marginBottom: 10 / proporcional, cursor: 'default', textAlign: 'left'}}>
                                Contácto
                            </h4>
                            <div className='rounded-pill' style={{width: '15%', height: 4 / proporcional, background: 'white'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={location} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>Dirección, ubicación</a>
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={phone} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>(+51) 999-XXXXXX</a>
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={email} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  600, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                                    <a href='/' style={{textDecoration: 'none', color: 'white'}}>correo@dominio.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
