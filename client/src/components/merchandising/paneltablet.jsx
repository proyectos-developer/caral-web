import React from 'react'

import MenuDatosTablet from '../comun/menudatostablet.jsx'
import MenuSuperiorProveedorTablet from '../comun/menusuperiorproveedortablet.jsx'
import MerchandisingTablet from './merchandisingtablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'

export default function MerchandisingPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', background: '#c0e1d7'}}>
            <MenuDatosTablet proporcional={proporcional}/>
            <MenuSuperiorProveedorTablet proporcional={proporcional}/>
            <MerchandisingTablet proporcional={proporcional}/>
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}
