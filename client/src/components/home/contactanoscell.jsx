import React from 'react'

import InformacionCell from './contacto/informacioncell.jsx'
import FormularioCell from './contacto/formulariocell.jsx'

export default function ContactanosCell({proporcional}) {

    return (
        <div id='contacto' className='' style={{width: '100%', height: 'auto', paddingTop: 200 / proporcional, paddingBottom: 200 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <InformacionCell proporcional={proporcional}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <FormularioCell proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
