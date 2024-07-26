import React from 'react'

import BannerPrincipalTablet from './bannerprincipaltablet.jsx'
import SobreNostrosTablet from './sobrenosotrostablet.jsx'
import NuestrosClientesTablet from './nuestrosclientestablet.jsx'
import NuestrosProductosTablet from './nuestrosproductostablet.jsx'
import ContactanosTablet from './contactanostablet.jsx'
import MapaUbicacionTablet from './mapaubicaciontablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'

import background_image from '../../assets/image/home/background_tablet.png'

export default function HomePanelTablet({proporcional}) {
    
    return (
        <div style={{width: '100%', height: '100%', background: '#c0e1d7'}}>
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
