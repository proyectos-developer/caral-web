import React from 'react'

export default function NuestrosProductosCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div id='productos' className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#FFD700', fontFamily: 'Playfair Display',
                        marginBottom: 30 / proporcional, cursor: 'default'}}>
                        Nuestros productos
                    </h2>
                </div>
        
            </div>
        </div>
    )
}
