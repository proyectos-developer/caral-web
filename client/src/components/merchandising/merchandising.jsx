import React from 'react'

import producto_00 from '../../assets/image/merch/producto_merch_01.png'
import producto_01 from '../../assets/image/merch/producto_merch_02.png'
import producto_02 from '../../assets/image/merch/producto_merch_03.png'
import producto_03 from '../../assets/image/merch/producto_merch_04.png'

export default function Merchandising ({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional,
                paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional
        }}>
            <h1 style={{fontSize: 50 / proporcional, fontWeight: 700, lineHeight: `${70 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                marginBottom: 32 / proporcional, cursor: 'default'}}>
                CARAL MERCH
            </h1>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                        <img className='rounded shadow' src={producto_00} 
                        style={{width: 320 / proporcional, height: 320 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                        <img className='rounded shadow' src={producto_01} 
                        style={{width: 320 / proporcional, height: 320 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                        <img className='rounded shadow' src={producto_02} 
                        style={{width: 320 / proporcional, height: 320 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                        <img className='rounded shadow' src={producto_03} 
                        style={{width: 320 / proporcional, height: 320 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
