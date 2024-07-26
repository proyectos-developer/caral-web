import React from 'react'

export default function NuestrosProductos({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional}}>
            <div id='productos' className='' style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                        marginBottom: 30 / proporcional, cursor: 'default'}}>
                        Nuestros productos
                    </h2>
                </div>
        
            </div>
        </div>
    )
}
