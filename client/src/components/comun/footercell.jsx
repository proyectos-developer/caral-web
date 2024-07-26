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

export default function FooterCell({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('')

    return (
        <div className='shadow' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    marginBottom: 30 / proporcional}}>
                <div style={{width: '90%', height: 'auto', padding: 10 / proporcional}}>
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
            </div>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    marginBottom: 30 / proporcional}}>
                <div style={{width: '90%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <h4 style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                marginBottom: 10 / proporcional, cursor: 'default', textAlign: 'left'}}>
                                <a href='/' style={{textDecoration: 'none', color: '#d5121e'}}>Menú</a>
                            </h4>
                            <div className='rounded-pill' style={{width: '15%', height: 4 / proporcional, background: '#d5121e'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'inicio' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: '#20294e'}}>Inicio</a>
                            </p>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'nosotros' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: '#20294e'}}>Nosotros</a>
                            </p>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'productos' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('productos')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: '#20294e'}}>Productos</a>
                            </p>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'contacto' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: '#20294e'}}>Contácto</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    marginBottom: 30 / proporcional}}>
                <div style={{width: '90%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <h4 style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                marginBottom: 10 / proporcional, cursor: 'default', textAlign: 'left'}}>
                                <a href='/' style={{textDecoration: 'none', color: '#d5121e'}}>Productos</a>
                            </h4>
                            <div className='rounded-pill' style={{width: '15%', height: 4 / proporcional, background: '#d5121e'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'productos-personales' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('productos-personales')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: '#20294e'}}>Personas naturales</a>
                            </p>
                            <p style={{fontSize: 20 / proporcional, fontWeight:  seleccion_menu === 'productos-negocios' ? 800 : 600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                marginBottom: 20 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('productos-negocios')} onMouseLeave={() => setSeleccionMenu('')}>
                                <a href='/' style={{textDecoration: 'none', color: '#20294e'}}>Negocios / empresas</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    marginBottom: 30 / proporcional}}>
                <div style={{width: '90%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <h4 style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                marginBottom: 10 / proporcional, cursor: 'default', textAlign: 'left'}}>
                                <a href='/' style={{textDecoration: 'none', color: '#d5121e'}}>Contácto</a>
                            </h4>
                            <div className='rounded-pill' style={{width: '15%', height: 4 / proporcional, background: '#d5121e'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={location} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 3 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                                    Dirección, ubicación
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={phone} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 3 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                                    (+51) 999-XXXXXX
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={email} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 3 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, fontWeight:  600, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                                    correo@dominio.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
