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

export default function NuestrosProductosCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div id='productos' className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional, 
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <h2 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                        marginBottom: 30 / proporcional, cursor: 'default', textAlign: 'center'}}>
                        Nuestros productos
                    </h2>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={producto_07} style={{width: '50%', height: '50%'}}/>
                    <img src={producto_01} style={{width: '50%', height: '50%'}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={producto_04} style={{width: '50%', height: '50%'}}/>
                    <img src={producto_05} style={{width: '50%', height: '50%'}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={producto_02} style={{width: '50%', height: '50%'}}/>
                    <img src={producto_03} style={{width: '50%', height: '50%'}}/>
                </div>
            </div>
        </div>
    )
}
