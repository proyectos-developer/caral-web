import React from 'react'

import MenuDatos from '../comun/menudatos.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'

import BannerPrincipal from './bannerprincipal.jsx'
import SobreNostros from './sobrenosotros.jsx'
import NuestrosClientes from './nuestrosclientes.jsx'
import NuestrosProductos from './nuestrosproductos.jsx'
import Contactanos from './contactanos.jsx'
import MapaUbicacion from './mapaubicacion.jsx'
import Footer from '../comun/footer.jsx'

export default function HomePanel({proporcional}) {
    
    return (
        <div className='position-relative' style={{width: '100%', height: '100%', background: '#c0e1d7'}}>
            <div className='position-fixed top-0 start-0' style={{width: '100%', height: 'auto', background: 'transparent', zIndex: 99999}}>
                <MenuDatos proporcional={proporcional}/>
                <MenuSuperior proporcional={proporcional}/>
            </div>
            <BannerPrincipal proporcional={proporcional}/>
            <SobreNostros proporcional={proporcional}/>
            <NuestrosClientes proporcional={proporcional}/>
            <NuestrosProductos proporcional={proporcional}/>
            <Contactanos proporcional={proporcional}/>
            {/**<MapaUbicacion proporcional={proporcional}/>**/}
            <Footer proporcional={proporcional}/>
        </div>
    )
}
