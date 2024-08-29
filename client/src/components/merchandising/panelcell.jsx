import React from 'react'

import MenuDatosCell from '../comun/menudatoscell.jsx'
import MenuSuperiorProveedorCell from '../comun/menusuperiorproveedorcell.jsx'
import MerchandisingCell from './merchandisingcell.jsx'
import FooterCell from '../comun/footercell.jsx'

export default function MerchandisingPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', background: '#c0e1d7'}}>
            <MenuDatosCell proporcional={proporcional}/>
            <MenuSuperiorProveedorCell proporcional={proporcional}/>
            <MerchandisingCell proporcional={proporcional}/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}
