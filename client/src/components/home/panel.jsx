import React from 'react'

import BannerPrincipal from './bannerprincipal.jsx'
import SobreNostros from './sobrenosotros.jsx'
import NuestrosClientes from './nuestrosclientes.jsx'
import NuestrosProductos from './nuestrosproductos.jsx'
import Contactanos from './contactanos.jsx'
import MapaUbicacion from './mapaubicacion.jsx'
import Footer from '../comun/footer.jsx'

import background_image from '../../assets/image/home/background.png'

export default function HomePanel({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 5070 / proporcional, backgroundImage: `url(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                     backgroundRepeat: 'no-repeat'}}>
            <BannerPrincipal proporcional={proporcional}/>
            <SobreNostros proporcional={proporcional}/>
            <NuestrosClientes proporcional={proporcional}/>
            <NuestrosProductos proporcional={proporcional}/>
            <Contactanos proporcional={proporcional}/>
            <MapaUbicacion proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
        </div>
    )
}
