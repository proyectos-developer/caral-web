import React from 'react'

import InformacionTablet from './contacto/informaciontablet.jsx'
import FormularioTablet from './contacto/formulariotablet.jsx'

export default function ContactanosTablet({proporcional}) {

    return (
        <div id='contacto' className='' style={{width: '100%', height: 'auto', paddingTop: 200 / proporcional, paddingBottom: 200 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <InformacionTablet proporcional={proporcional}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <FormularioTablet proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
