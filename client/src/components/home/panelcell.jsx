import React from 'react'

import BannerPrincipalCell from './bannerprincipalcell.jsx'
import SobreNostrosCell from './sobrenosotroscell.jsx'
import NuestrosClientesCell from './nuestrosclientescell.jsx'
import NuestrosProductosCell from './nuestrosproductoscell.jsx'
import ContactanosCell from './contactanoscell.jsx'
import MapaUbicacionCell from './mapaubicacioncell.jsx'
import FooterCell from '../comun/footercell.jsx'

import background_image from '../../assets/image/home/background_cell.png'

export default function HomePanelCell({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 6370 / proporcional, backgroundImage: `url(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                     backgroundRepeat: 'no-repeat'}}>
            <BannerPrincipalCell proporcional={proporcional}/>
            <SobreNostrosCell proporcional={proporcional}/>
            <NuestrosClientesCell proporcional={proporcional}/>
            <NuestrosProductosCell proporcional={proporcional}/>
            <ContactanosCell proporcional={proporcional}/>
            <MapaUbicacionCell proporcional={proporcional}/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}
