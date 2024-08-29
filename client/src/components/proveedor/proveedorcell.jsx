import React from 'react'

import producto_00 from '../../assets/image/olea/producto_00.png'
import producto_01 from '../../assets/image/olea/producto_01.png'
import producto_02 from '../../assets/image/olea/producto_02.png'
import producto_03 from '../../assets/image/olea/producto_03.png'

export default function ProveedorPanelTablet ({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional
        }}>
            <h1 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                marginBottom: 32 / proporcional, cursor: 'default'}}>
                Productos de OLEA
            </h1>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <img className='rounded shadow' src={producto_00} 
                    style={{width: 400 / proporcional, height: 400 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <img className='rounded shadow' src={producto_01} 
                    style={{width: 400 / proporcional, height: 400 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <img className='rounded shadow' src={producto_02} 
                    style={{width: 400 / proporcional, height: 400 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <img className='rounded shadow' src={producto_03} 
                    style={{width: 400 / proporcional, height: 400 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}
