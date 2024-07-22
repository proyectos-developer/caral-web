import React from 'react'

import location from '../../../assets/iconos/footer/location.png'
import email from '../../../assets/iconos/footer/email.png'
import phone from '../../../assets/iconos/footer/phone.png'

export default function InformacionTablet({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#FFD700', fontFamily: 'Playfair Display',
                    marginBottom: 0 / proporcional, cursor: 'default'}}>
                    Contáctanos
                </h2>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Open Sans', fontWeight: 400,
                    color: 'white'}}>
                    ¿Listo para llevar su negocio al siguiente nivel? ¡Contáctenos hoy mismo y descubra cómo podemos ayudarle a alcanzar sus metas!
                </p>
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
    )
}
