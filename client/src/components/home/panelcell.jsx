import React from 'react'

import MenuDatosCell from '../comun/menudatoscell.jsx'
import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import MenuLateralCell from '../comun/menulateralcell.jsx'

import BannerPrincipalCell from './bannerprincipalcell.jsx'
import SobreNostrosCell from './sobrenosotroscell.jsx'
import NuestrosClientesCell from './nuestrosclientescell.jsx'
import NuestrosProductosCell from './nuestrosproductoscell.jsx'
import ContactanosCell from './contactanoscell.jsx'
import MapaUbicacionCell from './mapaubicacioncell.jsx'
import FooterCell from '../comun/footercell.jsx'
import { useSelector } from 'react-redux'

export default function HomePanelCell({proporcional}) {

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)
    
    return (
        <div className='position-relative' style={{width: '100%', height: '100%', background: '#c0e1d7'}}>
            <div className='position-fixed top-0 start-0' style={{width: '100%', height: 'auto', background: 'transparent', zIndex: 9999}}>
                <MenuDatosCell proporcional={proporcional}/>
                <MenuSuperiorCell proporcional={proporcional}/>
                {
                    open_menu_main ? (
                        <MenuLateralCell proporcional={proporcional}/>
                    ) : null
                }
            </div>
            <BannerPrincipalCell proporcional={proporcional}/>
            <SobreNostrosCell proporcional={proporcional}/>
            <NuestrosClientesCell proporcional={proporcional}/>
            <NuestrosProductosCell proporcional={proporcional}/>
            <ContactanosCell proporcional={proporcional}/>
            {/**<MapaUbicacionCell proporcional={proporcional}/>**/}
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}
