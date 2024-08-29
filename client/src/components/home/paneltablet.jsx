import React from 'react'

import MenuDatosTablet from '../comun/menudatostablet.jsx'
import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import MenuLateralTablet from '../comun/menulateraltablet.jsx'

import BannerPrincipalTablet from './bannerprincipaltablet.jsx'
import SobreNostrosTablet from './sobrenosotrostablet.jsx'
import NuestrosClientesTablet from './nuestrosclientestablet.jsx'
import NuestrosProductosTablet from './nuestrosproductostablet.jsx'
import ContactanosTablet from './contactanostablet.jsx'
import MapaUbicacionTablet from './mapaubicaciontablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'
import { useSelector } from 'react-redux'

export default function HomePanelTablet({proporcional}) {

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)
    
    return (
        <div className='position-relative' style={{width: '100%', height: '100%', background: '#c0e1d7'}}>
            <div className='position-fixed top-0 start-0' style={{width: '100%', height: 'auto', background: 'transparent', zIndex: 99999}}>
                <MenuDatosTablet proporcional={proporcional}/>
                <MenuSuperiorTablet proporcional={proporcional}/>
                {
                    open_menu_main ? (
                        <MenuLateralTablet proporcional={proporcional}/>
                    ) : null
                }
            </div>
            <BannerPrincipalTablet proporcional={proporcional}/>
            <SobreNostrosTablet proporcional={proporcional}/>
            <NuestrosClientesTablet proporcional={proporcional}/>
            <NuestrosProductosTablet proporcional={proporcional}/>
            <ContactanosTablet proporcional={proporcional}/>
            {/**<MapaUbicacionTablet proporcional={proporcional}/>**/}
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}
