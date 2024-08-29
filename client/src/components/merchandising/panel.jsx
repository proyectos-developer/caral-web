import React from 'react'

import MenuDatos from '../comun/menudatos.jsx'
import MenuSuperiorProveedor from '../comun/menusuperiorproveedor.jsx'
import Merchandising from './merchandising.jsx'
import Footer from '../comun/footer.jsx'

export default function MerchandisingPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', background: '#c0e1d7'}}>
            <MenuDatos proporcional={proporcional}/>
            <MenuSuperiorProveedor proporcional={proporcional}/>
            <Merchandising proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
        </div>
    )
}
