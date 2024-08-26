import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import whatsapp from '../../assets/iconos/redes/whatsapp.png'

import MenuDatosTablet from '../comun/menudatostablet.jsx'
import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import MenuLateralTablet from '../comun/menulateraltablet.jsx'
import { useSelector } from 'react-redux'

export default function GlobalPanel({proporcional}) {

    const [boton_whatsapp, setBotonWhatsapp] = useState(false)

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <div className='position-fixed top-0 start-0' style={{width: '100%', height: 'auto', background: 'transparent', zIndex: 99999}}>
                <MenuDatosTablet proporcional={proporcional}/>
                <MenuSuperiorTablet proporcional={proporcional}/>
                {
                    open_menu_main ? (
                        <MenuLateralTablet proporcional={proporcional}/>
                    ) : null
                }
            </div>
            <Outlet/>
            <div className={boton_whatsapp ? 'position-fixed shadow-lg rounded-circle' : 'position-fixed shadow rounded-circle'} 
                style={{width: 96 / proporcional, height: 96 / proporcional, bottom: 64 / proporcional, right: 64 / proporcional, 
                    zIndex: 99999}} onMouseOver={() => setBotonWhatsapp(true)} onMouseLeave={() => setBotonWhatsapp(false)}>
                <a href='https://wa.me/51933377121?text=Hola,%20vi%20tu%20página%20web%20y%20me%20gustaría%20mas%20información%20sobre%20tus%20productos.' target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} style={{width: 96 / proporcional, height: 96 / proporcional, cursor: 'pointer', padding: 16 / proporcional}}/>
                </a>  
            </div>
        </div>
    )
}
