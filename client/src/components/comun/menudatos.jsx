import React from 'react'

import location from '../../assets/iconos/footer/location.png'
import email from '../../assets/iconos/footer/email.png'
import phone from '../../assets/iconos/footer/phone.png'

import facebook from '../../assets/iconos/redes/facebook.png'
import instagram from '../../assets/iconos/redes/instagram.png'
import twitter from '../../assets/iconos/redes/twitter.png'
import linkedin from '../../assets/iconos/redes/linkedin.png'
import tiktok from '../../assets/iconos/redes/tiktok.png'

export default function MenuDatos({proporcional}) {

    return (
        <div style={{width: '100%', height: 60 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
            <div style={{width: '100%', height: 40 / proporcional, paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 40 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '60%', height: 40 / proporcional}}>
                        <img src={location} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 10 / proporcional, cursor: 'pointer', textAlign: 'left', marginRight: 8 / proporcional}}>
                            Miraflores
                        </p>
                        <img src={email} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 10 / proporcional, cursor: 'pointer', textAlign: 'left', marginRight: 8 / proporcional}}>
                            info@caraldistribuidra.pe
                        </p>
                        <img src={phone} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 8 / proporcional, padding: 10 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeight:  600, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Mont',
                            marginBottom: 10 / proporcional, cursor: 'pointer', textAlign: 'left', marginRight: 8 / proporcional}}>
                            (+51) 933-377121
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '40%', height: 40 / proporcional}}>
                        <a href='https://www.facebook.com' target='_blank' style={{width: 'auto', height: 'auto', marginRight: 8 / proporcional}}>
                            <img src={facebook} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                        </a>
                        <a href='https://www.instagram.com' target='_blank' style={{width: 'auto', height: 'auto', marginRight: 8 / proporcional}}>
                            <img src={instagram} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                        </a>
                        <a href='https://www.linkedin.com' target='_blank' style={{width: 'auto', height: 'auto', marginRight: 8 / proporcional}}>
                            <img src={linkedin} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                        </a>
                        <a href='https://www.tiktok.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                            <img src={tiktok} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
