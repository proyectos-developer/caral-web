import React, { useState } from 'react'

import logo from '../../assets/logo/logo_menu_superior.png'
import { useNavigate } from 'react-router-dom'

export default function MenuSuperiorProveedor({proporcional}) {

    const navigate = useNavigate()

    const [seleccion_menu, setSeleccionMenu] = useState('inicio')

    return (
        <div className='shadow' style={{width: '100%', height: 120 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
            <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex jusfity-content-between' style={{width: '100%', height: 80 / proporcional}}>
                    <div style={{width: '30%', height: 80 / proporcional, paddingTop: 11.5 / proporcional,
                            paddingBottom: 11.5 / proporcional
                    }}>
                        <img src={logo} style={{width: 250 / proporcional, height: 57 / proporcional,
                            cursor: 'pointer'
                        }} onClick={() => navigate ('/')}/>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '70%', height: 80 / proporcional}}>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight:  seleccion_menu === 'inicio' ? 700 : 600, lineHeight: `${40 / proporcional}px`, 
                                color: '#20294e', fontFamily: 'Mont',
                                marginBottom: 0 / proporcional, cursor: 'pointer', textAlign: 'left'}}
                                onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                Inicio
                            </p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
