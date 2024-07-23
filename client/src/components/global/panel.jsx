import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import whatsapp from '../../assets/iconos/redes/whatsapp.png'

import MenuDatos from '../comun/menudatos.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'

export default function GlobalPanel({proporcional}) {

    const [boton_whatsapp, setBotonWhatsapp] = useState(false)

    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <div className='position-fixed top-0 start-0' style={{width: '100%', height: 'auto', background: 'transparent', zIndex: 99999}}>
                <MenuDatos proporcional={proporcional}/>
                <MenuSuperior proporcional={proporcional}/>
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
