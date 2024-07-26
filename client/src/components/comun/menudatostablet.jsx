import React from 'react'

import location from '../../assets/iconos/footer/location.png'
import email from '../../assets/iconos/footer/email.png'
import phone from '../../assets/iconos/footer/phone.png'

export default function MenuDatosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 60 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
            <div style={{width: '100%', height: 40 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 40 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={location} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                            Dirección, ubicación
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '33%', height: 'auto'}}>
                        <img src={email} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                            correo@dominio.com
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '33%', height: 'auto'}}>
                        <img src={phone} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                            (+51) 999-XXXXXX
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
