import React from 'react'

import location from '../../assets/iconos/footer/location.png'
import email from '../../assets/iconos/footer/email.png'
import phone from '../../assets/iconos/footer/phone.png'

export default function MenuDatosCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
            background: 'rgba(192, 225, 215, 0.8)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 40 / proporcional}}>
                    <div className='d-flex' style={{width: '48%', height: 'auto'}}>
                        <img src={location} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                            Miraflores
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '48%', height: 'auto'}}>
                        <img src={phone} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                            (+51) 933-377121
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <img src={email} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                        marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}>
                        info@caraldistribuidra.pe
                    </p>
                </div>
            </div>
        </div>
    )
}
