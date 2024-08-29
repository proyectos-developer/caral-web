import React from 'react'

import MenuDatos from '../comun/menudatos.jsx'
import MenuSuperiorProveedor from '../comun/menusuperiorproveedor.jsx'
import Proveedor from './proveedor.jsx'
import Footer from '../comun/footer.jsx'

export default function ProveedorPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', background: '#c0e1d7'}}>
            <MenuDatos proporcional={proporcional}/>
            <MenuSuperiorProveedor proporcional={proporcional}/>
            <Proveedor proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
        </div>
    )
}
