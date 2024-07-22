import React from 'react'

import Informacion from './contacto/informacion.jsx'
import Formulario from './contacto/formulario.jsx'

export default function Contactanos({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional}}>
            <div id='contacto' className='' style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='position-relative' style={{width: '40%', height: 'auto'}}>
                        <Informacion proporcional={proporcional}/>
                    </div>
                    <div style={{width: '58%', height: 'auto'}}>
                        <Formulario proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
