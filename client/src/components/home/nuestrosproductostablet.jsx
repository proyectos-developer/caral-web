import React from 'react'

import producto_00 from '../../assets/image/home/producto_00.png'
import producto_01 from '../../assets/image/home/producto_01.png'
import producto_02 from '../../assets/image/home/producto_02.png'
import producto_03 from '../../assets/image/home/producto_03.png'
import producto_04 from '../../assets/image/home/producto_04.png'
import producto_05 from '../../assets/image/home/producto_05.png'
import producto_06 from '../../assets/image/home/producto_06.png'
import producto_07 from '../../assets/image/home/producto_07.png'
import producto_08 from '../../assets/image/home/producto_08.png'
import producto_09 from '../../assets/image/home/producto_09.png'

export default function NuestrosProductosTablet({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div id='productos' className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional, 
                        paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                        marginBottom: 30 / proporcional, cursor: 'default'}}>
                        Nuestros productos
                    </h2>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={producto_07} style={{width: '33%', height: '33%'}}/>
                    <img src={producto_01} style={{width: '33%', height: '33%'}}/>
                    <img src={producto_02} style={{width: '33%', height: '33%'}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={producto_04} style={{width: '33%', height: '33%'}}/>
                    <img src={producto_05} style={{width: '33%', height: '33%'}}/>
                    <img src={producto_06} style={{width: '33%', height: '33%'}}/>
                </div>
            </div>
        </div>
    )
}
